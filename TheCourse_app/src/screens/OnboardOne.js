import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

const OnboardOne = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/api/getAllActiveUser'); // Thay thế URL này bằng URL thực tế của API Laravel của bạn
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <>
          {data ? (
            <Text>{JSON.stringify(data)}</Text> // Hiển thị dữ liệu trả về
          ) : (
            <Text>No data available</Text>
          )}
        </>
      )}
    </View>
  );
};

export default OnboardOne;

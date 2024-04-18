import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

const OnboardOne = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch("http://localhost/api/getAllDataUser")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error('Error fetching user data:', error));
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

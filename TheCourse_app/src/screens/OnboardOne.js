import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
export default function OnboardOne() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../../assets/images/onboard1.png')}
                    style={{ width: '100%', height: '100%' }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#F9AD2B' }}>Find a field that you like</Text>
                    <Text style={{ fontSize: 15, textAlign: 'center', color: 'gray' }}>There are many fields that you can find here, and you can learn all of them</Text>
                </View>
                <View style={{ flex: 1 }}>
                </View>
            </View>
        </View>
    )
}

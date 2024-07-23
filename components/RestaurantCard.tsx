import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import React from 'react'


interface RestaurantCardProps {
    food: any,
    restaurantName: string,
    address: string
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({food, restaurantName, address}) => {
  return (
    <View className='p-2'>
        <View className="flex-row items-center p-4 bg-gray-200 rounded-lg">
            <Image
            source={ food }
            className="w-16 h-16 rounded-full"
            />
            <View className="ml-4">
                <Text className="font-bold">{ restaurantName }</Text>
                <Text>{ address }</Text>
            </View>
        </View>
    </View>
  )
}

export default RestaurantCard
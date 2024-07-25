import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import PlaceOrderButton from './AddToCartButton';

interface OtherRestaurantsCardProps  {
    image: any,
    restaurantName: string,
    location: string
};

const OtherRestaurantsCard:React.FC<OtherRestaurantsCardProps> = ({ image, restaurantName, location }) => {
  return (
    <View className='p-2 mt-1 w-52'>
        <View className='p-4 bg-gray-200 rounded-lg'>
            <Image source={image} className='w-full h-32 rounded-lg' />
            <Text className='text-lg font-bold text-center'>{restaurantName}</Text>
            <Text className='text-center'>{location}</Text>
        </View>

    </View>
  )
}

export default OtherRestaurantsCard
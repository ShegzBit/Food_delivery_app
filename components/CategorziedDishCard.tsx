import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import PlaceOrderButton from './AddToCartButton';

interface CategorziedDishCardProps  {
    image: any,
    dishName: string,
    price: string
};

const CategorziedDishCard:React.FC<CategorziedDishCardProps> = ({ image, dishName, price }) => {
  return (
    <View className='w-1/2 p-2 mt-1'>
        <View className='p-4 bg-gray-200 rounded-lg'>
            <Image source={image} className='w-full h-32 rounded-lg' />
            <Text className='text-center'>{dishName}</Text>
            <Text className='font-bold text-center'>Price: {price}</Text>
            <PlaceOrderButton />
        </View>

    </View>
  )
}

export default CategorziedDishCard
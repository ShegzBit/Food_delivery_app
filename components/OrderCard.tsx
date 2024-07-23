import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import DeleteOrderButton from './DeleteOrderButton';

interface OrderCardProps  {
    image: any,
    dishName: string,
    price: string
};

const OrderCard:React.FC<OrderCardProps> = ({ image, dishName, price }) => {
  return (
    <View className='w-full p-2 mt-1'>
        <View className='p-4 bg-gray-200 rounded-lg '>
        <View className='flex-row'>
            <Image source={image} className='w-1/2 h-32 rounded-lg' />
            <View className='flex-1 p-4'>
                <Text className='text-center'>{dishName}</Text>
                <Text className='font-bold text-center'>Price: {price}</Text>
            </View>
        </View>
        <DeleteOrderButton />
        </View>

    </View>
  )
}

export default OrderCard
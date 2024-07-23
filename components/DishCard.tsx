import { View, Text, Image } from 'react-native'
import React from 'react'

interface DishCardProps {
    food: any,
    dishName: string
};

const DishCard: React.FC<DishCardProps> = ({food, dishName}) => {
    return (
        <View className="mr-4 bg-gray-200 rounded-xl w-28 h-24">
        <Image
        source={food}
        className="mt-1.5 ml-6 w-16 h-16 rounded-lg"
        />
        <Text className="mt-1.5 text-center">{dishName}</Text>
    </View>
    );
}

export default DishCard
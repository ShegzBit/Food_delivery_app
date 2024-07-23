import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

interface CategoryProps {
    categoryName: string
};

const Category: React.FC<CategoryProps> = ({ categoryName }) => {
    return (
    <View className="w-1/2 p-2">
        <View className="p-4 bg-gray-200 rounded-lg">
            <Link href='/categories'>
            <Text className="font-bold text-center">{categoryName}</Text>
            </Link>
        </View>
    </View>
    );
};

export default Category
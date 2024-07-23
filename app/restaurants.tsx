import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const restaurants = () => {
  return (
    <View>
        <SafeAreaView>
            <View>
                <Text className='text-2xl font-bold text-center'>Restaurants</Text>
            </View>
        </SafeAreaView>
    </View>
  )
}

export default restaurants
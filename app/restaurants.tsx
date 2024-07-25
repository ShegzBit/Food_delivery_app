import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import DeleteOrderButton from '../components/DeleteOrderButton';
import StarRating from '../components/StarRating';
import CategorziedDishCard from '../components/CategorziedDishCard';
import TemplateButton from '../components/TemplateButton';
import OtherRestaurantsCard from '../components/OtherRestaurantCard';
import {
    logo,
    pizza,
    grilledFish,
    chicken,
    chineseRice,
    chops,
    pancake,
    packake_01,
    soup,
    soup_01,
    spagEgg,
    suya,
    whiteRice,
    amalaEwedu,
    dodo,
    ebaEfo,
    friedRiceFish,
    hamburger,
    iyanEfo,
    jollof,
    meatStew,
    obe,
    ofadaRice,
    riceSoup,
    sausage,
    semoEfo,
    semoEgusi,
    smallChops
  } from "../constants/images";

const restaurants = () => {
    // Restaurant Description
    const restDesc = {
        long: 'Ibile Foods is a brand dedicated to celebrating and promoting traditional Nigerian cuisine. They focus on delivering authentic, high-quality, and flavorful dishes that represent the rich culinary heritage of Nigeria. With a commitment to using fresh, locally-sourced ingredients, Ibile Foods offers a diverse menu that includes a variety of regional specialties, ensuring a delightful and genuine dining experience for their customers.',
        short: 'Ibile Foods is a brand dedicated to celebrating and promoting traditional Nigerian...'
};
    const [isLong, setIsLong] = useState(false);
  return (
    <View>
        <SafeAreaView>
            <ScrollView>
                <View className="flex-row items-center justify-between p-4 my-3 bg-orange-500 rounded-lg">
                    <Text className="text-2xl font-extrabold">Restaurants</Text>
                    <TouchableOpacity>
                        <Image
                        source={logo}
                        className="w-10 h-10 rounded-full"
                        />
                    </TouchableOpacity>
                    </View>

                <View className='p-4 bg-gray-200 rounded-lg '>
                    <View className=''>
                        <Image source={semoEgusi} className='w-full rounded-lg h-52' />
                        <View className='p-2'>
                            <Text className='text-2xl font-bold'>Ibile Foods</Text>
                            <View className='flex-row'>
                                <Text className='text-lg'>{(isLong) ? restDesc.long : restDesc.short}</Text>
                                <TouchableOpacity
                                onPress={() => {
                                    setIsLong(prevIsLong => !prevIsLong);
                                }}
                                >
                                    <Text className='mt-16 text-yellow-500'>Show more</Text>
                                </TouchableOpacity>
                            </View>
                            <View className='flex-row mt-3'>
                                <Text className='mr-8 text-xl font-bold'>Ratings</Text>
                                <StarRating rating={3} />
                            </View>
                        </View>
                    </View>
                    <TemplateButton text='Reviews' handlePress={() => {}}/>
                </View>
                <Text className='mx-4 mt-4 -mb-1 text-xl font-bold'>Other dishes from this restaurant</Text>
                <View className='flex-row flex-wrap mt-2'>
                    <CategorziedDishCard image={amalaEwedu} dishName='Amala and Ewedu' price='₦3,500.00' />
                    <CategorziedDishCard image={ebaEfo} dishName='Eba and Efo' price='₦3,000.00' />
                    <CategorziedDishCard image={dodo} dishName='Fried Plantain (Dodo)' price='₦1,500.00' />
                    <CategorziedDishCard image={iyanEfo} dishName='Pounded Yam and Efo' price='₦5,500.00' />
                    <CategorziedDishCard image={semoEfo} dishName='Amala and Ewedu' price='₦4,000.00' />
                    <CategorziedDishCard image={amalaEwedu} dishName='Amala and Ewedu' price='₦3,500.00' />
                    <CategorziedDishCard image={semoEgusi} dishName='Semo and Egusi' price='₦3,500.00' />
                    <CategorziedDishCard image={ofadaRice} dishName='Ofada Rice' price='₦3,000.00' />
                </View>
                <Text className='mx-4 mt-4 -mb-1 text-xl font-bold'>Similar Restaurants</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View className='mt-2'>
                        <OtherRestaurantsCard image={amalaEwedu} restaurantName='Another Restaurant' location='Mushin, Lagos' />
                    </View>
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    </View>
  )
}

export default restaurants
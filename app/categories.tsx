import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategorziedDishCard from '../components/CategorziedDishCard';
import { Link } from 'expo-router';
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

const Categories = () => {
  return (
    <SafeAreaView>
        <View className="flex-row items-center justify-between p-4 mb-3 ml-3 mr-3 bg-orange-500 rounded-lg ml-3mr-3 mr-33">
            <Text className="text-2xl font-extrabold">Categories</Text>
            <TouchableOpacity>
              <Image
                source={logo}
                className="w-10 h-10 rounded-full"
              />
            </TouchableOpacity>
          </View>
        <ScrollView>
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
        </ScrollView>
    </SafeAreaView>
  )
}

export default Categories
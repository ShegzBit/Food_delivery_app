import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import OrderCard from '../../components/OrderCard';
import PlaceOrderButton from '../../components/AddToCartButton';

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
  } from "../../constants/images";


const orders = () => {
  return (
    <SafeAreaView>
        <View>
        <View className="flex-row items-center justify-between p-4 mt-2 mb-2 ml-2 mr-2 bg-orange-500 rounded-lg">
                <Text className="text-2xl font-extrabold">Orders</Text>
                <TouchableOpacity>
                <Image
                    source={logo}
                    className="w-10 h-10 rounded-full"
                />
                </TouchableOpacity>
            </View>
            
            {/* Order Cards */}
            <ScrollView>
            <OrderCard image={amalaEwedu} dishName='Amala and Ewedu' price='₦3,500.00' />
            <OrderCard image={ebaEfo} dishName='Eba and Efo' price='₦3,500.00' />
            <OrderCard image={amalaEwedu} dishName='Amala and Ewedu' price='₦3,500.00' />
            <OrderCard image={amalaEwedu} dishName='Amala and Ewedu' price='₦3,500.00' />
            <OrderCard image={amalaEwedu} dishName='Amala and Ewedu' price='₦3,500.00' />
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default orders
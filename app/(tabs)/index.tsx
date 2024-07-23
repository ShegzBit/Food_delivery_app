import React, { useState, useEffect } from 'react';
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

import { View, Text, Image, ScrollView, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import food from '../assets/images/pizza.jpeg';
import DishCard from '../../components/DishCard';
import Category from '../../components/CategoryCard';
import RestaurantCard from '../../components/RestaurantCard';
import { Link } from 'expo-router';
import TempOrderButton from '../../components/TempOrderLink';

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <ScrollView className="bg-white">
          <View className="p-4">
            <View className="flex-row items-center justify-between p-4 bg-orange-500 rounded-lg">
              <Text className="text-2xl font-extrabold"><Link href='/account'>Welcome to Foodie</Link></Text>
              <TouchableOpacity>
                <Image
                  source={logo}
                  className="w-10 h-10 rounded-full"
                />
              </TouchableOpacity>
            </View>

            <View className="mt-4">
              <Text className="text-xl font-bold">Popular Dishes</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
                  {/* Dishes */}
                  <DishCard food={soup} dishName="Soup" />
                  <DishCard food={grilledFish} dishName="grilledFish" />
                  <DishCard food={chineseRice} dishName="Chinese Rice" />
                  <DishCard food={spagEgg} dishName="Spag and Egg" />
                  <DishCard food={chicken} dishName="Chicken" />
                  <DishCard food={whiteRice} dishName="White Rice" />
                  <DishCard food={suya} dishName="Roasted Meat" />
              </ScrollView>
            </View>

            <View className="mt-4">
              <Text className="text-xl font-bold">Categories</Text>
              <View className="flex-row flex-wrap mt-2">
                {/* Example category card */}

                  <Category categoryName="Swallow" />
                  <Category categoryName="Snacks" />
                  <Category categoryName="Soup" />
                  <Category categoryName="Small Chops" />
                  <Category categoryName="Delicacies" />

              </View>
            </View>

            <View className="mt-4">
              <Text className="text-xl font-bold">Nearby Restaurants</Text>
              {/* Example restaurant card */}
              <ScrollView showsVerticalScrollIndicator={false}  className="mt-2">

                <RestaurantCard food={amalaEwedu} restaurantName='Ibile Foods' address='Mushin, Lagos' />
                <RestaurantCard food={semoEfo} restaurantName='Mister Biggs' address='Palm Alvenue, Lagos' />
                <RestaurantCard food={smallChops} restaurantName='Olayemi Snacks' address='Mushin, Lagos' />
                <RestaurantCard food={chicken} restaurantName='Chicken Republic' address='Palmgrove Mushin, Lagos' />
                <RestaurantCard food={chineseRice} restaurantName='Tetrazinni' address='Palm Alvenue, Lagos' />
                <RestaurantCard food={meatStew} restaurantName='Gibby Meatz' address='Yaba, Lagos' />
                <RestaurantCard food={suya} restaurantName='Jibola Suya Spot' address='Sabo, Lagos' />
                <RestaurantCard food={sausage} restaurantName='Yummy snacks' address='Fadeyi Lagos' />


              </ScrollView>
            </View>
          </View>
          <Link href='/(auth)/sign-in'>SignIn</Link>
          <TempOrderButton />
        </ScrollView>
      </SafeAreaView>
  );
};

export default HomeScreen;

import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import InfoBox from '../../components/InfoBox';
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
  } from "../../constants/images";

const account = () => {
  return (
    <SafeAreaView>
      {/* Page Content */}
      <View className="flex-row items-center justify-between p-4 mt-2 mb-2 ml-2 mr-2 bg-orange-500 rounded-lg">
                <Text className="text-2xl font-extrabold">My Account</Text>
                <TouchableOpacity>
                <Image
                    source={logo}
                    className="w-10 h-10 rounded-full"
                />
                </TouchableOpacity>
            </View>

            <ScrollView className='mb-3'>
                <InfoBox header='ACCOUNT INFORMATION' details={['Feranmi Awotubo', 'feranmiawotubo16@gmail.com']}/>
                <InfoBox header='ADDRESS BOOK' details={[
                  'Your default shipping address:',
                  'Feranmi Awotubo',
                  '6, Coker lane Fadeyi bus stop Mushin Lagos',
                  'Mushin-Idi Oro, Lagos',
                  '+234 8052215374 / +234 8052215374'
                ]}/>
                <InfoBox header='NEWSLETTER PREFERENCES' details={[
                  'You are currently subscribed to following newsletters:',
                  '✔️ daily newsletters'
                ]}
                />
            </ScrollView>
    </SafeAreaView>
  )
}

export default account
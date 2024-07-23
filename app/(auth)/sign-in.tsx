import { View, Text, TextInput, SafeAreaView, Image } from 'react-native';
import React, { useState } from 'react';
import InputField from '../../components/InputField';
import TemplateButton from '../../components/TemplateButton';
import { logo } from '../../constants/images'

const SignIn = () => {
  return (
    <View>
      {/* page content */}
      <SafeAreaView>
        <View className='mx-auto mt-12'>
            <Image
                source={logo}
            />
        </View>
        <View className='mx-1 my-8'>
            <InputField label='Username' placeholder='Enter your Username' secureTextEntry={false} />
            <InputField label='Password' placeholder='Enter your Password' secureTextEntry={true} />
            <TemplateButton text='Sign In' handlePress={() => {}} />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default SignIn
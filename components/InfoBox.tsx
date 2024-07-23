import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import HorizontalLine from './HorizontalLine';
import { StackRouter } from '@react-navigation/native';

interface InfoBoxProps {
    header: string
    details: Array<string>
}

const InfoBox: React.FC<InfoBoxProps> = ({header, details}) => {
  return (
    <View className='w-full m-3 h-52'>
      {/* Box Content */}
      <View className='border-2 border-gray-500 rounded-lg h-52'>
        <Text className='m-2 text-xl font-bold'>{ header }</Text>
        <HorizontalLine />
        <View className='m-3'>
          <ScrollView>
            {
              details.map((detail, index) => {
                if (index == 0) {
                  return <Text className='my-2 text-xl font-semibold' key={index}>{ detail }</Text>
                }
                return <Text key={index}>{ detail }</Text>
              })
            }
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default InfoBox
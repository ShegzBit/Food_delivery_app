import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'

interface InputFieldProps {
    placeholder: string,
    label: string,
    secureTextEntry: boolean
};

const InputField:React.FC<InputFieldProps> = ({ placeholder, label, secureTextEntry }) => {
    const [data, setData] = useState('');
  return (
    <>
            <View className='my-2'>
                <Text className='my-2 text-xl font-bold'>{label}</Text>
                <TextInput className='h-12 border-2 border-gray-600 rounded-md'
                placeholder={placeholder}
                value={data}
                onChangeText={setData}
                {
                    ...(secureTextEntry && {secureTextEntry})
                }
                />
            </View>
    </>
  )
}

export default InputField
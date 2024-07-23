import React from 'react';
import { Stack } from 'expo-router';
import CustomHeader from '../components/CustomHeader';
import { Tabs } from 'expo-router';


export const unstable_settings = {
    initialRouteName: 'orders',
};

export default function RootLayoutNav() {
 return (
    <Stack>
        <Stack.Screen name="sign-in" options={{ title: "Home" }} />
    </Stack>
);
}
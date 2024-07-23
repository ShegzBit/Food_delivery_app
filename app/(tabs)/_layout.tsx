import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
    initialRouteName='account'
    screenOptions={{ tabBarActiveTintColor: 'orange' }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{ 
            title: 'Orders',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="shopping-cart" color={color} />,
            headerShown: false,
           }}
          />
        <Tabs.Screen
          name="account"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
            headerShown: false,
          }}
        />
    </Tabs>
  );
}
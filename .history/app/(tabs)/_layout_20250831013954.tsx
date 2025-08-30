import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
// Her sayfa bileşeninizin useEffect hook'una ekleyin
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usePathname } from 'expo-router';
import { useEffect } from 'react';

export default function TabLayout() {
  
const pathname = usePathname();

useEffect(() => {
  const saveLastRoute = async () => {
    try {
      await AsyncStorage.setItem('lastRoute', pathname);
    } catch (e) {
      console.warn('Son route kaydedilemedi:', e);
    }
  };
  
  saveLastRoute();
}, [pathname]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3b82f6',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Ana Sayfa',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Keşfet',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stories"
        options={{
          title: 'Hikayeler',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
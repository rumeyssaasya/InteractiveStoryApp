import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import '../global.css';

// Splash screen'ı mümkün olduğunca göster
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null; // Splash screen gösterilmeye devam eder
  }

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#ffffff' },
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen 
            name="(tabs)" 
            options={{ 
              title: 'Ana Sayfa',
              animation: 'fade',
            }} 
          />
          <Stack.Screen 
            name="story/[id]" 
            options={{ 
              title: 'Hikaye',
              presentation: 'card',
              animation: 'slide_from_bottom',
            }} 
          />
          <Stack.Screen 
            name="story/endPage" 
            options={{ 
              title: 'Hikaye Tamamlandı',
              presentation: 'modal',
              animation: 'fade_from_bottom',
            }} 
          />
        </Stack>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
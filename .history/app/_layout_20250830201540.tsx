import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import '../global.css';

// Screens
import TabLayout from './(tabs)/_layout';
import StoryReader from './story/[id]';
import EndPage from './story/endPage';

// Types
import { RootStackParamList } from './types/types';

// Splash screen'ı göster
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.otf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
      <View style={{ flex: 1 }}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#ffffff' },
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen 
            name="Tabs" 
            component={TabLayout}
            options={{ 
              animation: 'fade',
            }} 
          />
          <Stack.Screen 
            name="StoryReader" 
            component={StoryReader}
            options={{ 
              presentation: 'card',
              animation: 'slide_from_right',
            }} 
          />
          <Stack.Screen 
            name="EndPage" 
            component={EndPage}
            options={{ 
              presentation: 'modal',
              animation: 'fade_from_bottom',
            }} 
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
  );
}
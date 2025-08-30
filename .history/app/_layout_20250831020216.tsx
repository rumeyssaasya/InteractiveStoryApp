import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './stor';
import '../global.css';

SplashScreen.preventAutoHideAsync();

function AppLayout() {
  const router = useRouter();

  useEffect(() => {
    const prepare = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        const lastRoute = await AsyncStorage.getItem('lastRoute');
        const validRoutes = ['/(tabs)', '/story/', '/story/endPage'];

        if (lastRoute && validRoutes.some(route => lastRoute.startsWith(lastRoute))) {
          router.replace(lastRoute as any);
        }
      } catch (e) {
        console.warn('Son route yüklenirken hata:', e);
      } finally {
        SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="story/[id]" />
        <Stack.Screen name="story/endPage" />
      </Stack>
      <StatusBar style="dark" />
    </View>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}

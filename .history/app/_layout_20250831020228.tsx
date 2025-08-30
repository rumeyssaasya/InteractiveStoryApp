import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import { ThemeProvider, useTheme } from '../app/contexts/ThemeContext';
import '../global.css';

// Splash screen'ı göster
SplashScreen.preventAutoHideAsync();

// Tema bilgisini kullanacak iç layout bileşeni
function ThemedLayout() {
  const { isDark } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const prepare = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Son açılan sayfanın yolunu AsyncStorage'den al
        const lastRoute = await AsyncStorage.getItem('lastRoute');
        
        if (lastRoute) {
          // Geçerli rotaları kontrol et
          const validRoutes = ['/(tabs)', '/story/', '/story/endPage'];
          const isValidRoute = validRoutes.some(route => lastRoute.startsWith(route));
          
          if (isValidRoute) {
            // Son rotaya yönlendir
            router.replace(lastRoute as any);
          }
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
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedLayout />
    </ThemeProvider>
  );
}
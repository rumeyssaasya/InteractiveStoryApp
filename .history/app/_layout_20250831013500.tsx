import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import '../global.css';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

// Define valid route types
type ValidRoute = '(tabs)' | 'story/[id]' | 'story/endPage';

function ThemedLayout() {
  const router = useRouter();

  useEffect(() => {
    const prepare = async () => {
      try {
        // Optional: Add a minimum splash screen time
        await new Promise(resolve => setTimeout(resolve, 500));

        // Read last route from storage
        const lastRoute = await AsyncStorage.getItem("lastRoute") as ValidRoute | null;
        
        // Validate the route exists before navigating
        const validRoutes: ValidRoute[] = ["(tabs)", "story/[id]", "story/endPage"];
        const isValidRoute = lastRoute && validRoutes.includes(lastRoute);
        
        if (isValidRoute) {
          // Use type assertion to ensure TypeScript accepts the route
          router.replace(lastRoute as unknown as `/story/${string}` | "/(tabs)" | "/story/endPage");
        } else {
          // Fallback to default route if stored route is invalid
          router.replace("/(tabs)" as unknown as `/story/${string}` | "/(tabs)" | "/story/endPage");
        }
      } catch (e) {
        console.warn("Error preparing app:", e);
        // Fallback to default route on error
        router.replace("/(tabs)" as unknown as `/story/${string}` | "/(tabs)" | "/story/endPage");
      } finally {
        // Hide splash screen regardless of what happens
        await SplashScreen.hideAsync();
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
    </View>
  );
}

export default function Layout() {
  return (
    <>
      <StatusBar style="auto" />
      <ThemedLayout />
    </>
  );
}
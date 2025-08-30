import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

export default function RootLayout() {
  useEffect(() => {
    // Uygulama başlangıç ayarları
  }, []);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="story" options={{ presentation: 'card' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
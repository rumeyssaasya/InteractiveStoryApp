import { Link } from 'expo-router';
import { FlatList, Image, Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sampleStories } from '../data/stories';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usePathname } from 'expo-router';
import { useEffect } from 'react';

export default function StoriesScreen() {
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
    <SafeAreaView className="flex-1 p-4 bg-gray-50" edges={['top']}>
      <Text className="text-2xl font-bold mb-4">Hikayeler</Text>
      <FlatList
        data={sampleStories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`../story/${item.id}`} asChild>
            <Pressable className="bg-white rounded-lg p-4 mb-4 shadow-sm">
              <Image
                source={{ uri: item.coverImage }}
                className="w-full h-40 rounded-md mb-2"
              />
              <Text className="text-xl font-semibold">{item.title}</Text>
              <Text className="text-gray-600">{item.description}</Text>
              <Text className="text-gray-500 mt-1">Yazar: {item.author}</Text>
              <Text className="text-blue-500 text-xs mt-1">{item.genre}</Text>
            </Pressable>
          </Link>
        )}
      />
    </SafeAreaView>
  );

}

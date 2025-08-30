import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sampleStories } from '../data/stories';
import { getAllProgress } from '../storage';

export default function HomeScreen() {
  const [recentStories, setRecentStories] = useState<any[]>([]);

  useEffect(() => {
    loadRecentStories();
  }, []);

  const loadRecentStories = async () => {
    try {
      const allProgress = await getAllProgress();
      // Son 3 ilerlemeyi al
      const recentProgress = allProgress.slice(-3).reverse();
      
      const recent = recentProgress.map(progress => {
        const story = sampleStories.find(s => s.id === progress.storyId);
        return {
          ...progress,
          story,
          lastPlayed: new Date().toLocaleDateString()
        };
      }).filter(item => item.story);

      setRecentStories(recent);
    } catch (error) {
      console.error('Geçmiş hikayeler yüklenirken hata:', error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <ScrollView className="flex-1">
        <View className="p-4">
          {/* Başlık - SafeAreaView altında */}
          <Text className="text-3xl font-bold text-gray-900">Karar Kutusu</Text>
          <Text className="text-gray-600 mt-2">Interaktif maceralara hazır mısın?</Text>

          {/* Öne Çıkan Hikayeler */}
          <View className="mb-6 mt-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-xl font-semibold">Öne Çıkan Hikayeler</Text>
              <Link href="/stories" asChild>
                <Pressable>
                  <Text className="text-blue-500">Tümü</Text>
                </Pressable>
              </Link>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
              {sampleStories.slice(0, 3).map((story) => (
                <Link key={story.id} href={{
                  pathname: "/story/[id]",
                  params: { id: story.id }
                }} asChild>
                  <Pressable className="w-64 mr-4 bg-white rounded-xl shadow-sm overflow-hidden">
                    <Image
                      source={{ uri: story.coverImage }}
                      className="w-full h-40"
                    />
                    <View className="p-3">
                      <Text className="font-semibold text-lg" numberOfLines={1}>
                        {story.title}
                      </Text>
                      <Text className="text-gray-600 text-sm" numberOfLines={2}>
                        {story.description}
                      </Text>
                      <Text className="text-gray-500 text-xs mt-1">
                        {story.author}
                      </Text>
                    </View>
                  </Pressable>
                </Link>
              ))}
            </ScrollView>
          </View>

          {/* Hızlı Erişim */}
          <View className="mb-6">
            <Text className="text-xl font-semibold mb-4">Hızlı Erişim</Text>
            <View className="flex-row justify-between">
              <Link href="/stories" asChild>
                <Pressable className="bg-white p-4 rounded-xl shadow-sm flex-1 mr-2 items-center">
                  <Ionicons name="book" size={24} color="#3b82f6" />
                  <Text className="mt-2 text-center font-medium">Tüm Hikayeler</Text>
                </Pressable>
              </Link>
              <Link href="/explore" asChild>
                <Pressable className="bg-white p-4 rounded-xl shadow-sm flex-1 ml-2 items-center">
                  <Ionicons name="compass" size={24} color="#3b82f6" />
                  <Text className="mt-2 text-center font-medium">Keşfet</Text>
                </Pressable>
              </Link>
            </View>
          </View>

          {/* Son Oynanan Hikayeler */}
          {recentStories.length > 0 && (
            <View className="mb-6">
              <Text className="text-xl font-semibold mb-4">Son Oynananlar</Text>
              <View className="space-y-3">
                {recentStories.map((recent, index) => (
                  <Link 
                    key={index} 
                    href={{
                      pathname: "/story/[id]",
                      params: { id: recent.storyId }
                    }} 
                    asChild
                  >
                    <Pressable className="bg-white p-4 rounded-xl shadow-sm flex-row items-center">
                      <Image
                        source={{ uri: recent.story.coverImage }}
                        className="w-16 h-16 rounded-lg mr-4"
                      />
                      <View className="flex-1">
                        <Text className="font-semibold text-lg">{recent.story.title}</Text>
                        <Text className="text-gray-600 text-sm">
                          {recent.completed ? 'Tamamlandı' : 'Devam Ediyor'}
                        </Text>
                        <Text className="text-gray-500 text-xs">
                          {recent.choices.length} seçim yapıldı
                        </Text>
                      </View>
                      <Ionicons name="play-circle" size={24} color="#3b82f6" />
                    </Pressable>
                  </Link>
                ))}
              </View>
            </View>
          )}

          {/* İstatistikler */}
          <View className="bg-blue-50 p-4 rounded-xl">
            <Text className="text-lg font-semibold mb-2">İlerleme Durumu</Text>
            <View className="flex-row justify-between">
              <View className="items-center">
                <Text className="text-2xl font-bold">{recentStories.length}</Text>
                <Text className="text-gray-600">Başlanan</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold">
                  {recentStories.filter(s => s.completed).length}
                </Text>
                <Text className="text-gray-600">Tamamlanan</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold">
                  {recentStories.reduce((total, story) => total + story.choices.length, 0)}
                </Text>
                <Text className="text-gray-600">Seçim</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
import { Ionicons } from '@expo/vector-icons';
import { Link, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Image, Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sampleStories } from '../data/stories';
import { getAllProgress } from '../storage';
// Her sayfa bileşeninizin useEffect hook'una ekleyin
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usePathname } from 'expo-router';

// Sayfa bileşeninizin içinde




export default function HomeScreen() {
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
  const [recentStories, setRecentStories] = useState<any[]>([]);
  const [expandedTimelines, setExpandedTimelines] = useState<{[key: string]: boolean}>({});
  const [refreshing, setRefreshing] = useState(false);

  const loadRecentStories = useCallback(async () => {
    try {
      setRefreshing(true);
      const allProgress = await getAllProgress();
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

      const initialExpandedState: {[key: string]: boolean} = {};
      recent.forEach((item, index) => {
        initialExpandedState[`${item.storyId}-${index}`] = false;
      });
      setExpandedTimelines(initialExpandedState);
    } catch (error) {
      console.error('Geçmiş hikayeler yüklenirken hata:', error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  // Ekran her odaklandığında verileri yenile
  useFocusEffect(
    useCallback(() => {
      loadRecentStories();
    }, [loadRecentStories])
  );

  // İlk yükleme
  useEffect(() => {
    loadRecentStories();
  }, [loadRecentStories]);

  const toggleTimeline = (key: string) => {
    setExpandedTimelines(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Timeline bileşeni
  const Timeline = ({ progress, index }: { progress: any; index: number }) => {
    if (!progress.story) return null;
    
    const timelineKey = `${progress.storyId}-${index}`;
    const isExpanded = expandedTimelines[timelineKey];
    
    // İlerleme yüzdesini hesapla
    const totalChapters = Object.keys(progress.story.chapters).length;
    const visitedChapters = new Set(progress.choices.map((c: any) => c.chapterId)).size;
    const progressPercentage = Math.round((visitedChapters / totalChapters) * 100);
    
    return (
      <View className="mt-3">
        {/* Timeline açma/kapama butonu */}
        <Pressable 
          onPress={() => toggleTimeline(timelineKey)}
          className="flex-row items-center justify-between py-2"
        >
          <Text className="text-blue-500 text-sm">
            {isExpanded ? 'İlerlemeyi Gizle' : 'İlerlemeyi Göster'}
          </Text>
          <Ionicons 
            name={isExpanded ? 'chevron-up' : 'chevron-down'} 
            size={16} 
            color="#3b82f6" 
          />
        </Pressable>
        
        {isExpanded && (
          <>
            {/* İlerleme yüzdesi */}
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-xs text-gray-500">İlerleme</Text>
              <Text className="text-xs font-medium">{progressPercentage}%</Text>
            </View>
            
            {/* Progress bar */}
            <View className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <View 
                className="h-full bg-blue-500" 
                style={{ width: `${progressPercentage}%` }}
              />
            </View>
            
            {/* Yapılan seçimler */}
            <View className="mt-3">
              <Text className="text-xs font-medium text-gray-700 mb-2">Seçim Geçmişi:</Text>
              {progress.choices.map((choice: any, choiceIndex: number) => {
                const chapter = progress.story.chapters[choice.chapterId];
                const choiceObj = chapter?.choices.find((c: any) => c.id === choice.choiceId);
                
                return (
                  <View key={choiceIndex} className="flex-row items-start mb-2">
                    <View className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 mr-2" />
                    <View className="flex-1">
                      <Text className="text-xs text-gray-700 font-medium">
                        Bölüm {choiceIndex + 1}
                      </Text>
                      <Text className="text-xs text-gray-600">
                        {choiceObj?.text || "Seçim yükleniyor..."}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <ScrollView 
        className="flex-1"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={loadRecentStories}
            colors={['#3b82f6']}
            tintColor={'#3b82f6'}
          />
        }
      >
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
                      <Text className="text-blue-500 text-xs mt-1">{story.genre}</Text>
                      <Text className="text-gray-500 text-xs mt-1">
                        {story.author}
                      </Text>
                    </View>
                  </Pressable>
                </Link>
              ))}
            </ScrollView>
          </View>

          {/* Son Oynanan Hikayeler */}
          {recentStories.length > 0 && (
            <View className="mb-6">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-xl font-semibold">Son Oynananlar</Text>
                <Pressable onPress={loadRecentStories} className="flex-row items-center">
                  <Ionicons name="refresh" size={16} color="#3b82f6" />
                  <Text className="text-blue-500 ml-1">Yenile</Text>
                </Pressable>
              </View>
              <View className="space-y-3">
                {recentStories.map((recent, index) => (
                  <View key={index} className="bg-white p-4 rounded-xl shadow-sm">
                    <View className="flex-row items-center">
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
                      <Link 
                        href={{
                          pathname: "/story/[id]",
                          params: { 
                            id: recent.storyId,
                            chapterId: recent.currentChapterId // Kaldığı yerden devam et
                          }
                        }} 
                        asChild
                      >
                        <Pressable className="bg-blue-500 px-3 py-2 rounded-lg ml-2">
                          <Text className="text-white text-sm font-medium">Devam Et</Text>
                        </Pressable>
                      </Link>
                    </View>
                    
                    {/* Timeline gösterimi */}
                    <Timeline progress={recent} index={index} />
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Yükleme durumu */}
          {refreshing && (
            <View className="items-center py-4">
              <Text className="text-gray-500">Yükleniyor...</Text>
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
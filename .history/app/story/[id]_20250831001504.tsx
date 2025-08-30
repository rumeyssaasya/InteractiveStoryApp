import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Pressable, Text, View } from 'react-native';
import { sampleStories } from '../data/stories';
import { clearUserProgress, getUserProgress, saveUserProgress } from '../storage';
import { Story, UserProgress } from '../types';

export default function StoryReader() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const navigation = useNavigation();
  
  const [story, setStory] = useState<Story | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [choiceStats, setChoiceStats] = useState<{ [key: string]: number }>({});
  const [showStats, setShowStats] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Animasyon değerleri
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const contentScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (id) loadData();
  }, [id]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: story?.title || 'Hikaye',
      headerLeft: () => (
        <Pressable onPress={() => router.back()} className="ml-2">
          <Ionicons name="arrow-back" size={24} color="#3b82f6" />
        </Pressable>
      ),
      headerRight: () => (
        <Pressable onPress={restartStory} className="mr-2">
          <Ionicons name="refresh" size={24} color="#3b82f6" />
        </Pressable>
      ),
    });
  }, [navigation, story]);

  const loadData = async () => {
    try {
      const storyId = Array.isArray(id) ? id[0] : id;
      if (!storyId) return setLoading(false);

      const foundStory = sampleStories.find(s => s.id === storyId);
      if (!foundStory) return setLoading(false);

      setStory(foundStory);

      const userProgress = await getUserProgress(storyId);
      if (userProgress) {
        setProgress(userProgress);
      } else {
        const newProgress: UserProgress = {
          storyId: storyId,
          currentChapterId: foundStory.firstChapterId,
          choices: [],
          completed: false
        };
        setProgress(newProgress);
        await saveUserProgress(newProgress);
      }
    } catch (error) {
      console.error('Veri yükleme hatası:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateRandomPercentage = () => Math.floor(Math.random() * 61) + 30;

  const animateTransition = () => {
    setIsTransitioning(true);
    
    // Çıkış animasyonu
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -50,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(contentScale, {
        toValue: 0.95,
        duration: 400,
        useNativeDriver: true,
      })
    ]).start(() => {
      // Animasyon tamamlandığında state'i sıfırla
      fadeAnim.setValue(1);
      slideAnim.setValue(0);
      contentScale.setValue(1);
      setIsTransitioning(false);
    });
  };

  const handleChoiceSelect = async (choiceId: string, nextChapterId: string) => {
    if (!story || !progress || isTransitioning) return;

    // Seçenek yüzdelerini göster
    const stats: { [key: string]: number } = {};
    story.chapters[progress.currentChapterId]?.choices.forEach(choice => {
      stats[choice.id] = generateRandomPercentage();
    });
    setChoiceStats(stats);
    setShowStats(true);

    setTimeout(async () => {
      // Geçiş animasyonunu başlat
      animateTransition();

      setTimeout(async () => {
        const newProgress: UserProgress = {
          ...progress,
          currentChapterId: nextChapterId,
          choices: [...progress.choices, { chapterId: progress.currentChapterId, choiceId }]
        };

        const nextChapter = story.chapters[nextChapterId];

        if (nextChapter?.isEnding) {
          newProgress.completed = true;
        }

        setProgress(newProgress);
        await saveUserProgress(newProgress);

        setShowStats(false);
        setChoiceStats({});
      }, 400); // Animasyon süresiyle eşleşmeli
    }, 2000);
  };

  const restartStory = async () => {
    if (!story) return;
    try {
      await clearUserProgress(story.id);
      const newProgress: UserProgress = {
        storyId: story.id,
        currentChapterId: story.firstChapterId,
        choices: [],
        completed: false
      };
      setProgress(newProgress);
      await saveUserProgress(newProgress);
      alert('Hikaye baştan başlatıldı!');
    } catch (error) {
      console.error(error);
      alert('Hikaye yeniden başlatılırken bir hata oluştu.');
    }
  };

  const exitStory = () => router.push('/(tabs)/home');

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!story || !progress) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-lg font-bold mb-2">Hikaye bulunamadı</Text>
        <Pressable onPress={exitStory} className="bg-blue-500 px-6 py-3 rounded-lg">
          <Text className="text-white font-medium">Geri Dön</Text>
        </Pressable>
      </View>
    );
  }

  const currentChapter = story.chapters[progress.currentChapterId];
  if (!currentChapter) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-lg font-bold mb-2">Bölüm bulunamadı</Text>
        <Pressable onPress={restartStory} className="bg-blue-500 px-6 py-3 rounded-lg mb-3">
          <Text className="text-white font-medium">Baştan Başla</Text>
        </Pressable>
        <Pressable onPress={exitStory} className="bg-gray-500 px-6 py-3 rounded-lg">
          <Text className="text-white font-medium">Geri Dön</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      <Animated.ScrollView 
        className="flex-1"
        style={{
          opacity: fadeAnim,
          transform: [
            { translateY: slideAnim },
            { scale: contentScale }
          ]
        }}
      >
        <View className="p-4">
          <Text className="text-2xl font-bold mb-4 text-center">{currentChapter.title}</Text>
          
          {/* İçerik için de ayrı animasyon */}
          <Animated.Text 
            className="text-lg leading-7 mb-6 text-gray-800"
            style={{
              opacity: fadeAnim,
            }}
          >
            {currentChapter.content}
          </Animated.Text>

          {currentChapter.choices && currentChapter.choices.length > 0 ? (
            <View className="mt-6">
              <Text className="text-lg font-semibold mb-4">Seçiminizi yapın:</Text>
              {currentChapter.choices.map((choice, index) => {
                const percentage = choiceStats[choice.id];
                const isStatsVisible = showStats && percentage !== undefined;

                return (
                  <Animated.View
                    key={choice.id}
                    style={{
                      opacity: fadeAnim,
                      transform: [{
                        translateY: slideAnim.interpolate({
                          inputRange: [-50, 0],
                          outputRange: [-20 * index, 0],
                          extrapolate: 'clamp'
                        })
                      }]
                    }}
                  >
                    <Pressable
                      disabled={isStatsVisible || isTransitioning}
                      className={`p-4 rounded-lg mb-3 ${isStatsVisible ? "bg-gray-200" : "bg-blue-500 active:bg-blue-600"} ${isTransitioning ? "opacity-50" : ""}`}
                      onPress={() => handleChoiceSelect(choice.id, choice.nextChapterId)}
                    >
                      {isStatsVisible ? (
                        <View className="w-full">
                          <View className="flex-row justify-between mb-1">
                            <Text className="text-gray-800">{choice.text}</Text>
                            <Text className="text-blue-600 font-bold">%{percentage}</Text>
                          </View>
                          <View className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                            <Animated.View
                              className="h-3 bg-blue-500"
                              style={{ 
                                width: `${percentage}%`,
                                transform: [{
                                  scaleX: contentScale.interpolate({
                                    inputRange: [0.95, 1],
                                    outputRange: [0.8, 1]
                                  })
                                }]
                              }}
                            />
                          </View>
                        </View>
                      ) : (
                        <Text className="text-white text-center font-medium text-lg">{choice.text}</Text>
                      )}
                    </Pressable>
                  </Animated.View>
                );
              })}
            </View>
          ) : currentChapter.isEnding ? (
            <Animated.View 
              className="mt-6"
              style={{
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }]
              }}
            >
              <Pressable
                className="bg-green-500 p-4 rounded-lg mb-3 active:bg-green-600"
                onPress={() => router.push({ pathname: '/story/endPage', params: { storyId: story.id } })}
              >
                <Text className="text-white text-center font-medium text-lg">
                  Hikayeyi Tamamla
                </Text>
              </Pressable>
            </Animated.View>
          ) : (
            <View className="mt-6 p-4 bg-yellow-100 rounded-lg">
              <Text className="text-yellow-800 text-center">Bu hikayenin sonuna geldiniz.</Text>
            </View>
          )}
        </View>
      </Animated.ScrollView>

      {/* Alt kısımda butonlar */}
      <View className="p-4 border-t border-gray-200 bg-white">
        <Pressable 
          onPress={restartStory} 
          className="bg-red-500 p-4 rounded-lg mb-3 items-center active:bg-red-600"
          disabled={isTransitioning}
        >
          <Text className="text-white font-medium">Baştan Başla</Text>
        </Pressable>
        <Pressable 
          onPress={exitStory} 
          className="bg-gray-200 p-4 rounded-lg items-center active:bg-gray-300"
          disabled={isTransitioning}
        >
          <Text className="text-gray-800 font-medium">Hikayeden Çık</Text>
        </Pressable>
      </View>
    </View>
  );
}
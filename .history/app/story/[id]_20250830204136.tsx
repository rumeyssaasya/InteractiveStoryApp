import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { sampleStories } from '../data/stories';
import { getUserProgress, saveUserProgress } from '../storage';
import { Story, UserProgress } from '../types';

export default function StoryReader() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const navigation = useNavigation();
  
  const [story, setStory] = useState<Story | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadData();
    }
  }, [id]);

  // Header'da geri butonu ekle
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: story?.title || 'Hikaye',
      headerLeft: () => (
        <Pressable 
          onPress={() => router.back()}
          className="ml-2"
        >
          <Ionicons name="arrow-back" size={24} color="#3b82f6" />
        </Pressable>
      ),
    });
  }, [navigation, story]);

  const loadData = async () => {
    try {
      const storyId = Array.isArray(id) ? id[0] : id;
      
      if (!storyId) {
        console.error('Hikaye IDsi bulunamadı');
        setLoading(false);
        return;
      }

      const foundStory = sampleStories.find(s => s.id === storyId);
      if (!foundStory) {
        console.error('Hikaye bulunamadı:', storyId);
        setLoading(false);
        return;
      }
      
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

  const handleChoiceSelect = async (choiceId: string, nextChapterId: string) => {
    if (!story || !progress) return;
    
    const newProgress: UserProgress = {
      ...progress,
      currentChapterId: nextChapterId,
      choices: [...progress.choices, {
        chapterId: progress.currentChapterId,
        choiceId
      }]
    };
    
    const nextChapter = story.chapters[nextChapterId];
    if (nextChapter && nextChapter.isEnding) {
      newProgress.completed = true;
      router.push({ pathname: '/story/endPage', params: { storyId: story.id } });
    }
    
    setProgress(newProgress);
    await saveUserProgress(newProgress);

    if (nextChapter && !nextChapter.isEnding) {
      setProgress(newProgress);
    }
  };

  const exitStory = () => {
    router.push('/(tabs)/home');
    // veya direkt ana sayfaya gitmek için:
    // router.back(); // Bir önceki sayfaya dön
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!story || !progress) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Hikaye bulunamadı</Text>
        <Pressable 
          onPress={exitStory}
          className="bg-blue-500 px-4 py-2 rounded-lg mt-4"
        >
          <Text className="text-white">Geri Dön</Text>
        </Pressable>
      </View>
    );
  }

  const currentChapter = story.chapters[progress.currentChapterId];

  if (!currentChapter) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Bölüm bulunamadı</Text>
        <Pressable 
          onPress={exitStory}
          className="bg-blue-500 px-4 py-2 rounded-lg mt-4"
        >
          <Text className="text-white">Geri Dön</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      {/* İçerik */}
      <View className="p-4 flex-1">
        <Text className="text-2xl font-bold mb-2">{currentChapter.title}</Text>
        <Text className="text-lg mb-6 leading-7">{currentChapter.content}</Text>
        
        <View className="mt-auto">
          {currentChapter.choices.map((choice) => (
            <Pressable
              key={choice.id}
              className="bg-blue-500 p-4 rounded-lg mb-3"
              onPress={() => handleChoiceSelect(choice.id, choice.nextChapterId)}
            >
              <Text className="text-white text-center font-medium">{choice.text}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Alt kısımda çıkış butonu */}
      <View className="p-4 border-t border-gray-200">
        <Pressable 
          onPress={exitStory}
          className="bg-gray-200 p-4 rounded-lg items-center"
        >
        </Pressable>
      </View>
    </View>
  );
}
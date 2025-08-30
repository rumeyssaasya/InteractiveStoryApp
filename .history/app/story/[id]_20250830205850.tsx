import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
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
      headerRight: () => (
        <Pressable 
          onPress={restartStory}
          className="mr-2"
        >
          <Ionicons name="refresh" size={24} color="#3b82f6" />
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
      
      // Kullanıcıyı bilgilendir
      alert('Hikaye baştan başlatıldı!');
      
    } catch (error) {
      console.error('Hikaye yeniden başlatma hatası:', error);
      alert('Hikaye yeniden başlatılırken bir hata oluştu.');
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
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-lg font-bold mb-2">Hikaye bulunamadı</Text>
        <Pressable 
          onPress={exitStory}
          className="bg-blue-500 px-6 py-3 rounded-lg"
        >
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
        <Pressable 
          onPress={restartStory}
          className="bg-blue-500 px-6 py-3 rounded-lg mb-3"
        >
          <Text className="text-white font-medium">Baştan Başla</Text>
        </Pressable>
        <Pressable 
          onPress={exitStory}
          className="bg-gray-500 px-6 py-3 rounded-lg"
        >
          <Text className="text-white font-medium">Geri Dön</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-2xl font-bold mb-4 text-center">{currentChapter.title}</Text>
          <Text className="text-lg leading-7 mb-6 text-gray-800">{currentChapter.content}</Text>
          
          {currentChapter.choices && currentChapter.choices.length > 0 ? (
            <View className="mt-6">
              <Text className="text-lg font-semibold mb-4">Seçiminizi yapın:</Text>
              {currentChapter.choices.map((choice) => (
                <Pressable
                  key={choice.id}
                  className="bg-blue-500 p-4 rounded-lg mb-3 active:bg-blue-600"
                  onPress={() => handleChoiceSelect(choice.id, choice.nextChapterId)}
                >
                  <Text className="text-white text-center font-medium text-lg">{choice.text}</Text>
                </Pressable>
              ))}
            </View>
          ) : (
            <View className="mt-6 p-4 bg-yellow-100 rounded-lg">
              <Text className="text-yellow-800 text-center">Bu hikayenin sonuna geldiniz.</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Alt kısımda butonlar */}
      <View className="p-4 border-t border-gray-200 bg-white">
        <Pressable 
          onPress={restartStory}
          className="bg-red-500 p-4 rounded-lg mb-3 items-center active:bg-red-600"
        >
          <Text className="text-white font-medium">Baştan Başla</Text>
        </Pressable>
        
        <Pressable 
          onPress={exitStory}
          className="bg-gray-200 p-4 rounded-lg items-center active:bg-gray-300"
        >
          <Text className="text-gray-800 font-medium">Hikayeden Çık</Text>
        </Pressable>
      </View>
    </View>
  );
}
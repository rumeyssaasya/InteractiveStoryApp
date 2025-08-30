import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { sampleStories } from '../data/stories';
import { getUserProgress, saveUserProgress } from '../storage';
import { Story, UserProgress } from '../types';

export default function StoryReader() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  const [story, setStory] = useState<Story | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  console.log('Alınan ID:', id); // Debug için

  useEffect(() => {
    if (id) {
      loadData();
    }
  }, [id]);

  const loadData = async () => {
    try {
      // ID string olarak geliyor mu kontrol et
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

    // Bölüm değiştiğinde state'i güncelle
    if (nextChapter && !nextChapter.isEnding) {
      setProgress(newProgress);
    }
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
        <Text className="text-gray-500">ID: {id}</Text>
      </View>
    );
  }

  const currentChapter = story.chapters[progress.currentChapterId];

  if (!currentChapter) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Bölüm bulunamadı</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-4 bg-gray-50">
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
  );
}
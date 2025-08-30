// app/story/[id].tsx
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { sampleStories } from '../data/stories';
import { getUserProgress, saveUserProgress } from '../storage';
import { Story, UserProgress } from '../types';

export default function StoryReader() {
  const navigation = useNavigation();
  const [story, setStory] = useState<Story | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  // Hikaye ID'sini almak için route parametrelerini kullanın
  // (Bu kısım projenizin yapısına göre değişebilir)

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Hikaye ID'sini al ve verileri yükle
      const foundStory = sampleStories[0]; // Örnek olarak ilk hikaye
      setStory(foundStory);
      
      const userProgress = await getUserProgress(foundStory.id);
      
      if (userProgress) {
        setProgress(userProgress);
      } else {
        const newProgress: UserProgress = {
          storyId: foundStory.id,
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
    if (nextChapter.isEnding) {
      newProgress.completed = true;
      navigation.navigate('EndPage', { storyId: story.id });
    }
    
    setProgress(newProgress);
    await saveUserProgress(newProgress);
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
      </View>
    );
  }

  const currentChapter = story.chapters[progress.currentChapterId];

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
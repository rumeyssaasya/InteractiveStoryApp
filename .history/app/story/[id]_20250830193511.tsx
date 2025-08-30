import { Link, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { sampleStories } from '../data/stories';
import { getUserProgress, saveUserProgress } from '../storage/index';
import { Story, UserProgress } from '../types';

export default function StoryReader() {
  const { id } = useLocalSearchParams();
  const [story, setStory] = useState<Story | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    try {
      // Hikayeyi bul
      const foundStory = sampleStories.find(s => s.id === id);
      if (!foundStory) return;
      
      setStory(foundStory);
      
      // Kullanıcı ilerlemesini yükle
      const userProgress = await getUserProgress(id as string);
      
      if (userProgress) {
        setProgress(userProgress);
      } else {
        // Yeni ilerleme oluştur
        const newProgress: UserProgress = {
          storyId: id as string,
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
    
    // Son bölüm mü kontrol et
    const nextChapter = story.chapters[nextChapterId];
    if (nextChapter.isEnding) {
      newProgress.completed = true;
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

  if (progress.completed) {
    return <Link href={`/story/completion?storyId=${story.id}`} />;
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
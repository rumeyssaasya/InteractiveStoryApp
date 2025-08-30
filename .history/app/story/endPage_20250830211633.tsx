import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { sampleStories } from '../data/stories';
import { clearUserProgress } from '../storage';

export default function EndPage() {
  const router = useRouter();
  const { storyId } = useLocalSearchParams();
  
  // ID string olarak al
  const id = Array.isArray(storyId) ? storyId[0] : storyId;
  const story = sampleStories.find(s => s.id === id);

  const handleRestart = async () => {
    if (id) {
      await clearUserProgress(id);
      router.push({ pathname: '/story/[id]', params: { id } });
    }
  };

  const goToStories = () => {
    router.push('/(tabs)/stories');
  };

  const goToHome = () => {
    router.push('/(tabs)/home');
  };

  if (!story) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Hikaye bulunamadı</Text>
        <Text className="text-gray-500">ID: {id}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center items-center p-6 bg-blue-50">
      <View className="bg-white p-8 rounded-2xl shadow-lg items-center w-full max-w-md">
        <View className="w-20 h-20 bg-green-100 rounded-full justify-center items-center mb-6">
          <Ionicons name="trophy" size={40} color="#10b981" />
        </View>

        <Text className="text-2xl font-bold text-center mb-2">
          Tebrikler!
        </Text>
        <Text className="text-lg text-gray-600 text-center mb-6">
          "{story.title}" hikayesini başarıyla tamamladınız!
        </Text>

        <Image
          source={{ uri: story.coverImage }}
          className="w-32 h-32 rounded-xl mb-6"
        />

        <View className="w-full gap-3">
          <Pressable
            onPress={handleRestart}
            className="bg-blue-500 p-4 rounded-xl items-center active:bg-blue-600"
          >
            <Text className="text-white font-semibold">Yeniden Oyna</Text>
          </Pressable>
          
          <Pressable 
            onPress={goToStories} 
            className="bg-gray-200 p-4 rounded-xl items-center active:bg-gray-300"
          >
            <Text className="text-gray-800 font-semibold">Diğer Hikayeler</Text>
          </Pressable>

          <Pressable 
            onPress={goToHome} 
            className="bg-blue-100 p-4 rounded-xl items-center active:bg-blue-200"
          >
            <Text className="text-blue-800 font-semibold">Ana Sayfa</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
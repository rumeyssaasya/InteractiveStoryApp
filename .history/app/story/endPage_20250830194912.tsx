import { Ionicons } from '@expo/vector-icons';
import { Link, router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { sampleStories } from '../data/stories';
import { clearUserProgress } from '../storage';

export default function EndPage() {
  const { storyId } = useLocalSearchParams();
  const story = sampleStories.find(s => s.id === storyId);

  const handleRestart = async () => {
    if (storyId) {
      await clearUserProgress(storyId as string);
      router.replace(`/story/${storyId}`);
    }
  };

  if (!story) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Hikaye bulunamadı</Text>
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
            className="bg-blue-500 p-4 rounded-xl items-center"
          >
            <Text className="text-white font-semibold">Yeniden Oyna</Text>
          </Pressable>
          
          <Link href="/(tabs)/stories" asChild>
            <Pressable className="bg-gray-200 p-4 rounded-xl items-center">
              <Text className="text-gray-800 font-semibold">Diğer Hikayeler</Text>
            </Pressable>
          </Link>

          <Link href="/(tabs)" asChild>
            <Pressable className="p-4 rounded-xl items-center">
              <Text className="text-blue-500 font-semibold">Ana Sayfa</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { sampleStories } from '../data/stories';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        {/* Başlık */}
        <View className="mb-6">
          <Text className="text-3xl font-bold text-gray-900">Hikaye Dünyası</Text>
          <Text className="text-gray-600 mt-2">Interaktif maceralara hazır mısın?</Text>
        </View>

        {/* Öne Çıkan Hikayeler */}
        <View className="mb-6">
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
              <Link key={story.id} href={`../story/${story.id}`} asChild>
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
        <View>
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
      </View>
    </ScrollView>
  );
}
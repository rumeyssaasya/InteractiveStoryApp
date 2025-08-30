import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { sampleStories } from '../data/stories';

export default function ExploreScreen() {
  const categories = [
    { id: '1', name: 'Macera', icon: 'trail-sign-outline' },
    { id: '2', name: 'Bilim Kurgu', icon: 'rocket-outline' },
    { id: '3', name: 'Romantik', icon: 'heart-outline' },
    { id: '4', name: 'Gizem', icon: 'search-outline' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredStories = selectedCategory
    ? sampleStories.filter((story) => story.genre === selectedCategory)
    : sampleStories;

  return (
    <SafeAreaView className="flex-1 bg-gray-50 inset-1">
      <ScrollView>
        <View className="p-4">
          {/* Arama */}
          <View className="mb-6">
            <View className="bg-white flex-row items-center rounded-xl px-4 py-3 shadow-sm">
              <Ionicons name="search-outline" size={20} color="#9ca3af" />
              <Text className="ml-2 text-gray-400">Hikaye ara...</Text>
            </View>
          </View>

          {/* Kategoriler */}
          <View className="mb-6">
            <Text className="text-xl font-semibold mb-4">Kategoriler</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((category) => (
                <Pressable
                  key={category.id}
                  className={`mr-3 p-4 rounded-xl shadow-sm items-center w-32 ${
                    selectedCategory === category.name ? 'bg-blue-100' : 'bg-white'
                  }`}
                  onPress={() =>
                    setSelectedCategory(
                      selectedCategory === category.name ? null : category.name
                    )
                  }
                >
                  <Ionicons name={category.icon as any} size={24} color="#3b82f6" />
                  <Text className="mt-2 font-medium text-center">{category.name}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          {/* Popüler Hikayeler */}
          <View className="mb-6">
            <Text className="text-xl font-semibold mb-4">
              {selectedCategory ? `${selectedCategory} Hikayeleri` : 'Popüler Hikayeler'}
            </Text>
            {filteredStories.map((story) => (
              <Link key={story.id} href={`../story/${story.id}`} asChild>
                <Pressable className="bg-white p-4 rounded-xl shadow-sm mb-3 flex-row">
                  <Image
                    source={{ uri: story.coverImage }}
                    className="w-16 h-16 rounded-lg mr-4"
                  />
                  <View className="flex-1">
                    <Text className="font-semibold text-lg">{story.title}</Text>
                    <Text className="text-gray-600 text-sm" numberOfLines={2}>
                      {story.description}
                    </Text>
                    <Text className="text-gray-500 text-xs mt-1">{story.author}</Text>
                  </View>
                  <Ionicons name="chevron-forward-outline" size={20} color="#9ca3af" />
                </Pressable>
              </Link>
            ))}
          </View>

          {/* Yeni Eklenenler */}
          <View>
            <Text className="text-xl font-semibold mb-4">Yeni Eklenenler</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {filteredStories.slice().reverse().map((story) => (
                <Link key={story.id} href={`../story/${story.id}`} asChild>
                  <Pressable className="w-48 mr-4 bg-white rounded-xl shadow-sm overflow-hidden">
                    <Image source={{ uri: story.coverImage }} className="w-full h-32" />
                    <View className="p-3">
                      <Text className="font-semibold" numberOfLines={1}>
                        {story.title}
                      </Text>
                      <Text className="text-gray-600 text-xs" numberOfLines={2}>
                        {story.description}
                      </Text>
                    </View>
                  </Pressable>
                </Link>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

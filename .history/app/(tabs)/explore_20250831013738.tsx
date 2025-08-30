import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sampleStories } from '../data/stories';
// Her sayfa bileşeninizin useEffect hook'una ekleyin
import { usePathname } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Sayfa bileşeninizin içinde
const pathname = usePathname();

useEffect(() => {
  const saveLastRoute = async () => {
    try {
      await AsyncStorage.setItem('lastRoute', pathname);
    } catch (e) {
      console.warn('Son route kaydedilemedi:', e);
    }
  };
  
  saveLastRoute();
}, [pathname]);

export default function ExploreScreen() {
  const categories = [
    { id: '1', name: 'Macera', icon: 'trail-sign-outline' },
    { id: '2', name: 'Bilim Kurgu', icon: 'rocket-outline' },
    { id: '3', name: 'Romantik', icon: 'heart-outline' },
    { id: '4', name: 'Gizem', icon: 'search-outline' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtreleme fonksiyonu
  const filteredStories = sampleStories.filter((story) => {
    const matchesCategory = !selectedCategory || story.genre === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <StatusBar style="auto" />
      <ScrollView>
        <View className="p-4 pt-2"> 
          {/* Arama */}
          <View className="mb-6 mt-2">
            <View className="bg-white flex-row items-center rounded-xl px-4 py-3 shadow-sm">
              <Ionicons name="search-outline" size={20} color="#9ca3af" />
              <TextInput
                className="flex-1 ml-2 text-gray-800"
                placeholder="Hikaye ara..."
                placeholderTextColor="#9ca3af"
                value={searchQuery}
                onChangeText={setSearchQuery}
                clearButtonMode="while-editing"
              />
              {searchQuery.length > 0 && (
                <Pressable onPress={() => setSearchQuery('')}>
                  <Ionicons name="close-circle" size={20} color="#9ca3af" />
                </Pressable>
              )}
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

          {/* Arama ve kategori bilgisi */}
          {(searchQuery || selectedCategory) && (
            <View className="mb-4 bg-blue-50 p-3 rounded-lg">
              <Text className="text-blue-800 text-center">
                {searchQuery && selectedCategory 
                  ? `"${searchQuery}" araması ve ${selectedCategory} kategorisindeki sonuçlar`
                  : searchQuery
                  ? `"${searchQuery}" aramasındaki sonuçlar`
                  : `${selectedCategory} kategorisindeki hikayeler`
                }
                {filteredStories.length > 0 && ` (${filteredStories.length} bulundu)`}
              </Text>
            </View>
          )}

          {/* Sonuçlar */}
          <View className="mb-6">
            <Text className="text-xl font-semibold mb-4">
              {selectedCategory ? `${selectedCategory} Hikayeleri` : 'Popüler Hikayeler'}
            </Text>
            
            {filteredStories.length === 0 ? (
              <View className="bg-white p-6 rounded-xl items-center">
                <Ionicons name="search-outline" size={40} color="#9ca3af" />
                <Text className="text-gray-500 mt-2 text-center">
                  {searchQuery || selectedCategory 
                    ? 'Aranan kriterlere uygun hikaye bulunamadı'
                    : 'Henüz hiç hikaye yok'
                  }
                </Text>
              </View>
            ) : (
              filteredStories.map((story) => (
                <Link key={story.id} href={{
                  pathname: "/story/[id]",
                  params: { id: story.id }
                }} asChild>
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
                      <View className="flex-row items-center mt-1">
                        <Text className="text-blue-500 text-xs bg-blue-50 px-2 py-1 rounded-full">
                          {story.genre}
                        </Text>
                        <Text className="text-gray-500 text-xs ml-2">
                          {story.author}
                        </Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward-outline" size={20} color="#9ca3af" />
                  </Pressable>
                </Link>
              ))
            )}
          </View>

          {/* Yeni Eklenenler (sadece arama yoksa göster) */}
          {!searchQuery && filteredStories.length > 0 && (
            <View>
              <Text className="text-xl font-semibold mb-4">Yeni Eklenenler</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {filteredStories.slice().reverse().map((story) => (
                  <Link key={story.id} href={{
                    pathname: "/story/[id]",
                    params: { id: story.id }
                  }} asChild>
                    <Pressable className="w-48 mr-4 bg-white rounded-xl shadow-sm overflow-hidden">
                      <Image source={{ uri: story.coverImage }} className="w-full h-32" />
                      <View className="p-3">
                        <Text className="font-semibold" numberOfLines={1}>
                          {story.title}
                        </Text>
                        <Text className="text-blue-500 text-xs mt-1">
                          {story.genre}
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
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
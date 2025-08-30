import { Link } from 'expo-router';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { sampleStories } from '../data/stories';

export default function StoriesScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4">Hikayeler</Text>
        <FlatList
          data={sampleStories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link href={{
              pathname: "/story/[id]",
              params: { id: item.id }
            }} asChild>
              <Pressable className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <Image
                  source={{ uri: item.coverImage }}
                  className="w-full h-40 rounded-md mb-2"
                />
                <Text className="text-xl font-semibold">{item.title}</Text>
                <Text className="text-gray-600">{item.description}</Text>
                <Text className="text-gray-500 mt-1">Yazar: {item.author}</Text>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  );
}
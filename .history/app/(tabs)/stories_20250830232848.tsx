import { Link } from 'expo-router';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sampleStories } from '../data/stories';

export default function StoriesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
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
                <Text className="text-xl font-semibold mb-1">{item.title}</Text>
                <Text className="text-gray-600 mb-2">{item.description}</Text>
                
                {/* Genre ve yazar bilgisi */}
                <View className="flex-row justify-between items-center">
                  <Text className="text-blue-600 text-sm bg-blue-50 px-2 py-1 rounded-full">
                    {item.genre}
                  </Text>
                  <Text className="text-gray-500 text-sm">Yazar: {item.author}</Text>
                </View>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
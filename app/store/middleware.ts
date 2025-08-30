import AsyncStorage from '@react-native-async-storage/async-storage';

// Custom middleware to handle AsyncStorage operations
export const asyncStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  
  // Handle user progress updates
  if (action.type === 'story/updateUserProgress') {
    const { userProgress } = store.getState().story;
    AsyncStorage.setItem('userProgress', JSON.stringify(userProgress))
      .catch(error => console.error('AsyncStorage error:', error));
  }
  
  // Handle user stats updates
  if (action.type === 'user/setStats' || 
      action.type === 'user/incrementStoriesRead' ||
      action.type === 'user/incrementChoicesMade' ||
      action.type === 'user/incrementStoriesCompleted' ||
      action.type === 'user/setFavoriteGenre') {
    const { stats } = store.getState().user;
    AsyncStorage.setItem('userStats', JSON.stringify(stats))
      .catch(error => console.error('AsyncStorage error:', error));
  }
  
  return result;
};

// Default export to satisfy expo-router requirements
const middleware = {
  asyncStorageMiddleware,
};

export default middleware;

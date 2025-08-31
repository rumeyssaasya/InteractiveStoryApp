import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);

  if (action.type === 'story/updateUserProgress') {
    const { userProgress } = store.getState().story;
    AsyncStorage.setItem('userProgress', JSON.stringify(userProgress))
      .catch(error => console.error('AsyncStorage error:', error));
  }

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

const middleware = {
  asyncStorageMiddleware,
};

export default middleware;


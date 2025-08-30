import { sampleStories } from '../data/stories';
import { loadProgress, setStories } from '../story/storySlice';
import { store } from './index';
import { setStories as setStoriesList } from './storiesSlice';
import { setStats } from './userSlice';
import { loadUserProgressFromStorage, loadUserStatsFromStorage } from './utils';

// Initialize the store with data from AsyncStorage
export const initializeStore = async () => {
  try {
    // Load user progress
    const userProgress = await loadUserProgressFromStorage();
    store.dispatch(loadProgress(userProgress));
    
    // Load user stats
    const userStats = await loadUserStatsFromStorage();
    store.dispatch(setStats(userStats));
    
    // Set stories
    store.dispatch(setStories(sampleStories));
    store.dispatch(setStoriesList(sampleStories));
    
    console.log('Store initialized successfully');
  } catch (error) {
    console.error('Store initialization failed:', error);
  }
};

// Default export to satisfy expo-router requirements
const init = {
  initializeStore,
};

export default init;

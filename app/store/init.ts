import { sampleStories } from '../data/stories';
import { loadProgress, setStories } from '../story/storySlice';
import { store } from './index';
import { setStories as setStoriesList } from './storiesSlice';
import { setStats } from './userSlice';
import { loadUserProgressFromStorage, loadUserStatsFromStorage } from './utils';

export const initializeStore = async () => {
  try {
    const userProgress = await loadUserProgressFromStorage();
    store.dispatch(loadProgress(userProgress));

    const userStats = await loadUserStatsFromStorage();
    store.dispatch(setStats(userStats));

    store.dispatch(setStories(sampleStories));
    store.dispatch(setStoriesList(sampleStories));
    
    console.log('Store initialized successfully');
  } catch (error) {
    console.error('Store initialization failed:', error);
  }
};

const init = {
  initializeStore,
};

export default init;


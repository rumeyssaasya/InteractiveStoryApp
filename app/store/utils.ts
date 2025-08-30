import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProgress } from '../types';

// Load user progress from AsyncStorage
export const loadUserProgressFromStorage = async (): Promise<{ [storyId: string]: UserProgress }> => {
  try {
    const jsonValue = await AsyncStorage.getItem('userProgress');
    return jsonValue != null ? JSON.parse(jsonValue) : {};
  } catch (e) {
    console.error('User progress yükleme hatası:', e);
    return {};
  }
};

// Save user progress to AsyncStorage
export const saveUserProgressToStorage = async (userProgress: { [storyId: string]: UserProgress }): Promise<void> => {
  try {
    await AsyncStorage.setItem('userProgress', JSON.stringify(userProgress));
  } catch (e) {
    console.error('User progress kaydetme hatası:', e);
  }
};

// Load user stats from AsyncStorage
export const loadUserStatsFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userStats');
    if (jsonValue) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    console.error('User stats yükleme hatası:', e);
  }
  
  // Default stats
  return {
    storiesRead: 0,
    choicesMade: 0,
    storiesCompleted: 0,
    favoriteGenre: 'Macera'
  };
};

// Save user stats to AsyncStorage
export const saveUserStatsToStorage = async (stats: any): Promise<void> => {
  try {
    await AsyncStorage.setItem('userStats', JSON.stringify(stats));
  } catch (e) {
    console.error('User stats kaydetme hatası:', e);
  }
};

// Clear all user data
export const clearAllUserData = async (): Promise<void> => {
  try {
    await AsyncStorage.multiRemove(['userProgress', 'userStats']);
  } catch (e) {
    console.error('User data temizleme hatası:', e);
  }
};

// Default export to satisfy expo-router requirements
const utils = {
  loadUserProgressFromStorage,
  saveUserProgressToStorage,
  loadUserStatsFromStorage,
  saveUserStatsToStorage,
  clearAllUserData,
};

export default utils;

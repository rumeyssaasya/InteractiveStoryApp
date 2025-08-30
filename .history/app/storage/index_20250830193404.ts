import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProgress } from '../types';

const PROGRESS_KEY = 'userProgress';

export const getUserProgress = async (storyId: string): Promise<UserProgress | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(`${PROGRESS_KEY}_${storyId}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('İlerleme yükleme hatası:', e);
    return null;
  }
};

export const saveUserProgress = async (progress: UserProgress): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(progress);
    await AsyncStorage.setItem(`${PROGRESS_KEY}_${progress.storyId}`, jsonValue);
  } catch (e) {
    console.error('İlerleme kaydetme hatası:', e);
  }
};

export const clearUserProgress = async (storyId: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(`${PROGRESS_KEY}_${storyId}`);
  } catch (e) {
    console.error('İlerleme temizleme hatası:', e);
  }
};
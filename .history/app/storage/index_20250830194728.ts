import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProgress, UserStats } from '../types';

// Progress için key
const PROGRESS_KEY = 'userProgress';
const STATS_KEY = 'userStats';

// Kullanıcı ilerlemesini getir
export const getUserProgress = async (storyId: string): Promise<UserProgress | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(`${PROGRESS_KEY}_${storyId}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('İlerleme yükleme hatası:', e);
    return null;
  }
};

// Kullanıcı ilerlemesini kaydet
export const saveUserProgress = async (progress: UserProgress): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(progress);
    await AsyncStorage.setItem(`${PROGRESS_KEY}_${progress.storyId}`, jsonValue);
    
    // İstatistikleri güncelle
    await updateUserStats();
  } catch (e) {
    console.error('İlerleme kaydetme hatası:', e);
  }
};

// Kullanıcı ilerlemesini temizle
export const clearUserProgress = async (storyId: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(`${PROGRESS_KEY}_${storyId}`);
  } catch (e) {
    console.error('İlerleme temizleme hatası:', e);
  }
};

// Kullanıcı istatistiklerini getir
export const getUserStats = async (): Promise<UserStats> => {
  try {
    const jsonValue = await AsyncStorage.getItem(STATS_KEY);
    if (jsonValue) {
      return JSON.parse(jsonValue);
    }
  } catch (e) {
    console.error('İstatistik yükleme hatası:', e);
  }
  
  // Varsayılan istatistikler
  return {
    storiesRead: 0,
    choicesMade: 0,
    storiesCompleted: 0,
    favoriteGenre: 'Macera'
  };
};

// İstatistikleri güncelle
const updateUserStats = async (): Promise<void> => {
  try {
    const stats = await getUserStats();
    await AsyncStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('İstatistik güncelleme hatası:', e);
  }
};

// Tüm verileri temizle (debug için)
export const clearAllData = async (): Promise<void> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const progressKeys = keys.filter(key => key.startsWith(PROGRESS_KEY));
    await AsyncStorage.multiRemove([...progressKeys, STATS_KEY]);
  } catch (e) {
    console.error('Veri temizleme hatası:', e);
  }
};

// Varsayılan export (route hatası için)
export default { getUserProgress, saveUserProgress, clearUserProgress, getUserStats, clearAllData };
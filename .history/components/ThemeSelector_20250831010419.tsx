// components/ThemeSelector.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { useTheme } from '../app/contexts/ThemeContext';

interface ThemeSelectorProps {
  visible: boolean;
  onClose: () => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ visible, onClose }) => {
  const { theme, setTheme, isDark } = useTheme();

  const themes = [
    { id: 'light' as const, name: 'Açık', icon: 'sunny' },
    { id: 'dark' as const, name: 'Koyu', icon: 'moon' },
    { id: 'auto' as const, name: 'Otomatik', icon: 'phone-portrait' },
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable 
        className="flex-1 bg-black/50 justify-center items-center"
        onPress={onClose}
      >
        <View className="w-80 bg-white dark:bg-gray-800 rounded-2xl p-6">
          <Text className="text-xl font-bold text-center mb-6 dark:text-white">
            Tema Seçimi
          </Text>
          
          {themes.map((themeOption) => (
            <Pressable
              key={themeOption.id}
              onPress={() => {
                setTheme(themeOption.id);
                onClose();
              }}
              className={`flex-row items-center p-4 rounded-lg mb-2 ${
                theme === themeOption.id 
                  ? 'bg-blue-100 dark:bg-blue-900/30' 
                  : 'bg-gray-100 dark:bg-gray-700'
              }`}
            >
              <Ionicons 
                name={themeOption.icon as any} 
                size={24} 
                color={theme === themeOption.id ? '#3b82f6' : (isDark ? '#9ca3af' : '#6b7280')} 
              />
              <Text className={`ml-4 text-lg ${
                theme === themeOption.id 
                  ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                  : 'text-gray-800 dark:text-gray-200'
              }`}>
                {themeOption.name}
              </Text>
              {theme === themeOption.id && (
                <Ionicons 
                  name="checkmark" 
                  size={24} 
                  color="#3b82f6" 
                  className="ml-auto" 
                />
              )}
            </Pressable>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
};
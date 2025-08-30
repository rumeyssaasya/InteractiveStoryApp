# Redux Toolkit Setup Guide

Bu proje Redux Toolkit kullanarak state management yapısını kurmuştur. Mevcut yapıyı bozmadan Redux entegrasyonu tamamlanmıştır.

## Yapı

```
app/store/
├── index.ts          # Ana store konfigürasyonu
├── hooks.ts          # Typed Redux hooks
├── selectors.ts      # State selector'ları
├── middleware.ts     # Custom middleware
├── utils.ts          # Utility fonksiyonları
├── init.ts           # Store initialization
├── userSlice.ts      # User state management
├── storiesSlice.ts   # Stories state management
└── storySlice.ts     # Story progress management (mevcut)
```

## Kullanım

### 1. Store'a Erişim

```typescript
import { useAppDispatch, useAppSelector } from '../store';
import { selectStories, selectUserStats } from '../store';

function MyComponent() {
  const dispatch = useAppDispatch();
  const stories = useAppSelector(selectStories);
  const userStats = useAppSelector(selectUserStats);
  
  // ...
}
```

### 2. Actions Dispatch Etme

```typescript
import { setCurrentStory, updateUserProgress } from '../store';

function MyComponent() {
  const dispatch = useAppDispatch();
  
  const handleStorySelect = (storyId: string) => {
    dispatch(setCurrentStory(storyId));
  };
  
  const handleProgressUpdate = (storyId: string, progress: UserProgress) => {
    dispatch(updateUserProgress({ storyId, progress }));
  };
}
```

### 3. Async Actions

```typescript
import { loadUserStats, incrementStoriesRead } from '../store';

function MyComponent() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectUserLoading);
  
  useEffect(() => {
    dispatch(loadUserStats());
  }, [dispatch]);
  
  const handleStoryComplete = () => {
    dispatch(incrementStoriesRead());
  };
}
```

## State Yapısı

### Story State
```typescript
{
  stories: Story[];
  currentStoryId: string | null;
  userProgress: { [storyId: string]: UserProgress };
}
```

### User State
```typescript
{
  stats: UserStats;
  isLoading: boolean;
  error: string | null;
}
```

### Stories State
```typescript
{
  stories: Story[];
  filteredStories: Story[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  selectedGenre: string;
}
```

## Selector'lar

Hazır selector'lar `selectors.ts` dosyasında tanımlanmıştır:

- `selectStories` - Tüm hikayeler
- `selectFilteredStories` - Filtrelenmiş hikayeler
- `selectUserProgress` - Kullanıcı ilerlemesi
- `selectUserStats` - Kullanıcı istatistikleri
- `selectCurrentStoryId` - Mevcut hikaye ID'si

## Middleware

Custom middleware AsyncStorage operasyonlarını otomatik olarak yönetir:

- User progress güncellemeleri
- User stats güncellemeleri
- Hata yönetimi

## Initialization

Store otomatik olarak app başlangıcında initialize edilir:

1. AsyncStorage'dan user progress yüklenir
2. User stats yüklenir
3. Stories data set edilir
4. Middleware aktif hale gelir

## Mevcut Yapıyla Uyumluluk

- Mevcut `storySlice.ts` korunmuştur
- AsyncStorage entegrasyonu middleware ile yapılmıştır
- Theme context yapısı bozulmamıştır
- Tüm mevcut fonksiyonalite korunmuştur

## Yeni Özellikler

- Centralized state management
- Type-safe Redux hooks
- Automatic AsyncStorage persistence
- Better error handling
- Loading states
- Computed selectors

## Örnek Kullanım

```typescript
// Component'te Redux kullanımı
import React from 'react';
import { View, Text } from 'react-native';
import { useAppSelector, useAppDispatch } from '../store';
import { selectStories, selectUserStats, incrementStoriesRead } from '../store';

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const stories = useAppSelector(selectStories);
  const userStats = useAppSelector(selectUserStats);
  
  const handleStoryPress = (storyId: string) => {
    dispatch(incrementStoriesRead());
    // Navigation logic...
  };
  
  return (
    <View>
      <Text>Okunan Hikaye: {userStats.storiesRead}</Text>
      {stories.map(story => (
        <Text key={story.id} onPress={() => handleStoryPress(story.id)}>
          {story.title}
        </Text>
      ))}
    </View>
  );
}
```

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Story, UserProgress } from '../types';

interface StoryState {
  stories: Story[];
  currentStoryId: string | null;
  userProgress: { [storyId: string]: UserProgress };
}

const initialState: StoryState = {
  stories: [],
  currentStoryId: null,
  userProgress: {},
};

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    setStories(state, action: PayloadAction<Story[]>) {
      state.stories = action.payload;
    },
    setCurrentStory(state, action: PayloadAction<string>) {
      state.currentStoryId = action.payload;
      // Eğer daha önce progress yoksa başlat
      if (!state.userProgress[action.payload]) {
        state.userProgress[action.payload] = {
          storyId: action.payload,
          currentChapterId: '',
          choices: [],
          completed: false,
        };
      }
    },
    updateUserProgress(state, action: PayloadAction<{ storyId: string; progress: UserProgress }>) {
      state.userProgress[action.payload.storyId] = action.payload.progress;
    },
    loadProgress(state, action: PayloadAction<{ [storyId: string]: UserProgress }>) {
      state.userProgress = action.payload;
    },
    clearCurrentStory(state) {
      state.currentStoryId = null;
    },
    resetUserProgress(state, action: PayloadAction<string>) {
      delete state.userProgress[action.payload];
    },
  },
});

export const { 
  setStories, 
  setCurrentStory, 
  updateUserProgress, 
  loadProgress, 
  clearCurrentStory,
  resetUserProgress 
} = storySlice.actions;
export default storySlice.reducer;
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
    },
    updateUserProgress(state, action: PayloadAction<UserProgress>) {
      state.userProgress[action.payload.storyId] = action.payload;
    },
    resetUserProgress(state, action: PayloadAction<string>) {
      delete state.userProgress[action.payload];
    },
  },
});

export const { setStories, setCurrentStory, updateUserProgress, resetUserProgress } = storySlice.actions;
export default storySlice.reducer;
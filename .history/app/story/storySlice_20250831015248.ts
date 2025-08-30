// story/storySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StoryState {
  stories: any[]; // tipleri daha sonra netleştirebilirsin
  currentStoryId: string | null;
}

const initialState: StoryState = {
  stories: [],
  currentStoryId: null,
};

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    setStories(state, action: PayloadAction<any[]>) {
      state.stories = action.payload;
    },
    setCurrentStory(state, action: PayloadAction<string>) {
      state.currentStoryId = action.payload;
    },
    clearCurrentStory(state) {
      state.currentStoryId = null;
    },
  },
});

export const { setStories, setCurrentStory, clearCurrentStory } = storySlice.actions;
export default storySlice.reducer;

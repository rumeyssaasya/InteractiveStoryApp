import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as storage from '../storage';
import { UserStats } from '../types';

interface UserState {
  stats: UserStats;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  stats: {
    storiesRead: 0,
    choicesMade: 0,
    storiesCompleted: 0,
    favoriteGenre: 'Macera'
  },
  isLoading: false,
  error: null,
};

// Async thunk to load user stats
export const loadUserStats = createAsyncThunk(
  'user/loadStats',
  async () => {
    const stats = await storage.getUserStats();
    return stats;
  }
);

// Async thunk to update user stats
export const updateUserStats = createAsyncThunk(
  'user/updateStats',
  async (stats: UserStats) => {
    await storage.saveUserProgress({
      storyId: 'temp',
      currentChapterId: '',
      choices: [],
      completed: false,
    });
    return stats;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setStats(state, action: PayloadAction<UserStats>) {
      state.stats = action.payload;
    },
    incrementStoriesRead(state) {
      state.stats.storiesRead += 1;
    },
    incrementChoicesMade(state) {
      state.stats.choicesMade += 1;
    },
    incrementStoriesCompleted(state) {
      state.stats.storiesCompleted += 1;
    },
    setFavoriteGenre(state, action: PayloadAction<string>) {
      state.stats.favoriteGenre = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUserStats.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadUserStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stats = action.payload;
      })
      .addCase(loadUserStats.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to load user stats';
      })
      .addCase(updateUserStats.fulfilled, (state, action) => {
        state.stats = action.payload;
      });
  },
});

export const {
  setStats,
  incrementStoriesRead,
  incrementChoicesMade,
  incrementStoriesCompleted,
  setFavoriteGenre,
  clearError,
} = userSlice.actions;

export default userSlice.reducer;

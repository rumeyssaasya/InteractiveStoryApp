import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sampleStories } from '../data/stories';
import { Story } from '../types';

interface StoriesState {
  stories: Story[];
  filteredStories: Story[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  selectedGenre: string;
}

const initialState: StoriesState = {
  stories: [],
  filteredStories: [],
  isLoading: false,
  error: null,
  searchQuery: '',
  selectedGenre: '',
};

// Async thunk to load stories
export const loadStories = createAsyncThunk(
  'stories/loadStories',
  async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return sampleStories;
  }
);

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    setStories(state, action: PayloadAction<Story[]>) {
      state.stories = action.payload;
      state.filteredStories = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.filteredStories = filterStories(state.stories, action.payload, state.selectedGenre);
    },
    setSelectedGenre(state, action: PayloadAction<string>) {
      state.selectedGenre = action.payload;
      state.filteredStories = filterStories(state.stories, state.searchQuery, action.payload);
    },
    clearFilters(state) {
      state.searchQuery = '';
      state.selectedGenre = '';
      state.filteredStories = state.stories;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadStories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadStories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stories = action.payload;
        state.filteredStories = action.payload;
      })
      .addCase(loadStories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to load stories';
      });
  },
});

// Helper function to filter stories
const filterStories = (stories: Story[], searchQuery: string, selectedGenre: string): Story[] => {
  return stories.filter(story => {
    const matchesSearch = !searchQuery || 
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesGenre = !selectedGenre || story.genre === selectedGenre;
    
    return matchesSearch && matchesGenre;
  });
};

export const {
  setStories,
  setSearchQuery,
  setSelectedGenre,
  clearFilters,
  clearError,
} = storiesSlice.actions;

export default storiesSlice.reducer;

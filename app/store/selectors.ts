import { RootState } from './index';

// Story selectors
export const selectStories = (state: RootState) => state.stories.stories;
export const selectFilteredStories = (state: RootState) => state.stories.filteredStories;
export const selectStoriesLoading = (state: RootState) => state.stories.isLoading;
export const selectStoriesError = (state: RootState) => state.stories.error;
export const selectSearchQuery = (state: RootState) => state.stories.searchQuery;
export const selectSelectedGenre = (state: RootState) => state.stories.selectedGenre;

export const selectCurrentStoryId = (state: RootState) => state.story.currentStoryId;
export const selectUserProgress = (state: RootState) => state.story.userProgress;
export const selectUserProgressForStory = (storyId: string) => (state: RootState) => 
  state.story.userProgress[storyId];

// User selectors
export const selectUserStats = (state: RootState) => state.user.stats;
export const selectUserLoading = (state: RootState) => state.user.isLoading;
export const selectUserError = (state: RootState) => state.user.error;

// Computed selectors
export const selectStoriesByGenre = (genre: string) => (state: RootState) =>
  state.stories.stories.filter(story => story.genre === genre);

export const selectCompletedStories = (state: RootState) =>
  Object.values(state.story.userProgress).filter(progress => progress.completed);

export const selectInProgressStories = (state: RootState) =>
  Object.values(state.story.userProgress).filter(progress => 
    progress.currentChapterId && !progress.completed
  );

export const selectStoryById = (storyId: string) => (state: RootState) =>
  state.stories.stories.find(story => story.id === storyId);

// Default export to satisfy expo-router requirements
const selectors = {
  selectStories,
  selectFilteredStories,
  selectStoriesLoading,
  selectStoriesError,
  selectSearchQuery,
  selectSelectedGenre,
  selectCurrentStoryId,
  selectUserProgress,
  selectUserProgressForStory,
  selectUserStats,
  selectUserLoading,
  selectUserError,
  selectStoriesByGenre,
  selectCompletedStories,
  selectInProgressStories,
  selectStoryById,
};

export default selectors;

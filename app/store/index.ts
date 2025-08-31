import { configureStore } from '@reduxjs/toolkit';
import storyReducer from '../story/storySlice';
import { asyncStorageMiddleware } from './middleware';
import storiesReducer from './storiesSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    story: storyReducer,
    user: userReducer,
    stories: storiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['story/updateUserProgress'],
        ignoredPaths: ['story.userProgress'],
      },
    }).concat(asyncStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { default as storyReducer } from '../story/storySlice';
export { default as storiesReducer } from './storiesSlice';
export { default as userReducer } from './userSlice';

export * from './selectors';

export * from './hooks';

const storeConfig = {
  store,
};

export default storeConfig;


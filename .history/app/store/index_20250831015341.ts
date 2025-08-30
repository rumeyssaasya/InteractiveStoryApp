// app/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import storyReducer from '../story/storySlice';

export const store = configureStore({
  reducer: {
    story: storyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

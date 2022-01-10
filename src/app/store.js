import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from '../features/habits/habitsSlice';

export const store = configureStore({
  reducer: {
    habits: habitsReducer,
  }, 
});


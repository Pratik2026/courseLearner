import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingslice.js';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});
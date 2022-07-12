import { configureStore } from '@reduxjs/toolkit'
import songsSlice from './slices/songsSlice';
import filtersReducer from './slices/filterSlice';

export default configureStore({
  reducer: {
    songsReducer: songsSlice,
    filtersReducer: filtersReducer,
  },
});

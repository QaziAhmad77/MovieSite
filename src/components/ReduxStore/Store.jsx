import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from './MovieSlice';
import { alertSlice } from './AlertSlice';

export default configureStore({
  reducer: {
    movies: movieSlice.reducer,
    alert: alertSlice.reducer,
  },
});

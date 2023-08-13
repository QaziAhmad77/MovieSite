import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: {},
  shows: {},
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload;
    },
    getShows: (state, action) => {
      state.shows = action.payload;
    },
  },
});

export const { getMovies, getShows } = movieSlice.actions;
export default movieSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: {},
  shows: {},
  movieDetail: {},
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
    getMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
  },
});

export const { getMovies, getShows, getMovieDetail } = movieSlice.actions;
export default movieSlice.reducer;

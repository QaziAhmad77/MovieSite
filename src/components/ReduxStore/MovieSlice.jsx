import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: {},
  shows: {},
  movieDetail: {},
  showDetail: false,
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
    clickFunction: (state, action) => {
      state.showDetail = action.payload;
    },
  },
});

export const { getMovies, getShows, getMovieDetail, clickFunction } =
  movieSlice.actions;
export default movieSlice.reducer;

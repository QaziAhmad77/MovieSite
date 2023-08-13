import { useDispatch, useSelector } from 'react-redux';
import MovieListing from '../MovieListing/MovieListing';
import Heading from './heading';
import { useEffect } from 'react';
import BaseUrl from '../../common/BaseUrl';
import { apiKey } from '../../common/ApiKey';
import { hideLoading, showLoading } from '../ReduxStore/AlertSlice';
import { getMovies, getShows } from '../ReduxStore/MovieSlice';

const Home = () => {
  const { isLoading } = useSelector((state) => state.alert);
  console.log(isLoading);
  return isLoading ? <h2>Loading ...</h2> : <MovieListing />;
};

export default Home;

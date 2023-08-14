import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { apiKey } from '../../common/ApiKey';
import BaseURL from '../../common/BaseUrl';
import { hideLoading, showLoading } from '../ReduxStore/AlertSlice';
import { useParams } from 'react-router-dom';
import { getMovieDetail } from '../ReduxStore/MovieSlice';
import MovieCard from './MovieCard';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const getDetail = async (imdbID) => {
    try {
      dispatch(showLoading());
      const response = await BaseURL.get(
        `?apikey=${apiKey}&i=${imdbID}&Plot-full`
      );
      const data = response.data;
      dispatch(getMovieDetail(data));
      dispatch(hideLoading());
    } catch (error) {
      console.log(error, 'Something went wrong');
    }
  };
  useEffect(() => {
    getDetail(imdbID);
  }, [dispatch, imdbID]);
  return <MovieCard />;
};
1;
export default MovieDetail;

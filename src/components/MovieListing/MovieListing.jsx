import Slider from 'react-slick';
import { Settings } from '../../common/Settings';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import Heading from '../Home/heading';

const MovieListing = () => {
  const { movies } = useSelector((state) => state.movies);
  const { shows } = useSelector((state) => state.movies);
  console.log(movies, 'moviesssss');
  const getMovie =
    movies.Response === 'True' ? (
      movies.Search.map((item) => {
        return (
          <MovieCard poster={item.Poster} title={item.Title} year={item.Year} />
        );
      })
    ) : (
      <h2>No Movie Found</h2>
    );
  const getShows =
    shows.Response === 'True' ? (
      shows.Search.map((item) => {
        return (
          <MovieCard poster={item.Poster} title={item.Title} year={item.Year} />
        );
      })
    ) : (
      <h2>No Show Found</h2>
    );
  return (
    <div className="w-full flex flex-col gap-2 mt-4">
      <div className="flex flex-col gap-2">
        <Heading heading="Movies" />
        <div className="overflow-hidden">
          <Slider {...Settings}>{getMovie}</Slider>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Heading heading="Shows" />
        <div className="overflow-hidden">
          <Slider {...Settings}>{getShows}</Slider>;
        </div>
      </div>
    </div>
  );
};

export default MovieListing;

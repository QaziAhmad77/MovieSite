import Slider from 'react-slick';
import { Settings } from '../../common/Settings';
import MovieCard from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../Home/heading';
import { HiX } from 'react-icons/hi';
import { hideLoading, showLoading } from '../ReduxStore/AlertSlice';
import BaseUrl from '../../common/BaseUrl';
import { apiKey } from '../../common/ApiKey';
import { clickFunction, getMovieDetail } from '../ReduxStore/MovieSlice';

const MovieListing = () => {
  const dispatch = useDispatch();
  const { movieDetail } = useSelector((state) => state.movies);
  const { movies } = useSelector((state) => state.movies);
  const { shows } = useSelector((state) => state.movies);
  const { showDetail } = useSelector((state) => state.movies);
  console.log(showDetail, 'shoeeeeeeeeeeeeeeeee');

  console.log(movieDetail, 'hooooo');
  const openModalMovie = (id) => {
    console.log('da ymmmmm');
    getDetail(id);
  };
  const getDetail = async (imdbID) => {
    try {
      dispatch(showLoading());
      const response = await BaseUrl.get(
        `?apikey=${apiKey}&i=${imdbID}&Plot-full`
      );
      const data = response.data;
      dispatch(getMovieDetail(data));
      dispatch(hideLoading());
    } catch (error) {
      console.log(error, 'Something went wrong');
    }
  };
  console.log(showDetail, 'show detail');
  const getMovie =
    movies.Response === 'True' ? (
      movies.Search.map((item) => {
        return (
          <MovieCard
            key={item.imdbID}
            poster={item.Poster}
            title={item.Title}
            year={item.Year}
            imdbID={item.imdbID}
            openModalMovie={openModalMovie}
          />
        );
      })
    ) : (
      <h2>No Movie Found</h2>
    );
  const getShows =
    shows.Response === 'True' ? (
      shows.Search.map((item) => {
        return (
          <MovieCard
            key={item.imdbID}
            poster={item.Poster}
            title={item.Title}
            year={item.Year}
            imdbID={item.imdbID}
            openModalMovie={openModalMovie}
          />
        );
      })
    ) : (
      <h2>No Show Found</h2>
    );
  return (
    <>
      <div className="w-full flex flex-col gap-2 mt-4 px-5">
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
      {showDetail && (
        <div className="w-full h-[180vh] flex absolute top-0 z-50 bg-black-500 bg-opacity-50 backdrop-blur p-0 m-0">
          <div className="bg-cardDetail w-[50%] h-[35%] text-white sticky top-[15%] left-[25%]">
            <span
              onClick={() => dispatch(clickFunction(false))}
              className="absolute right-2 cursor-pointer top-2 font-extrabold text-2xl"
            >
              {' '}
              <HiX />
            </span>
            <div className="w-[90%] mdl:w-[70%]  flex flex-col mdl:flex-row gap-4 mx-auto mt-5 mdl:mt-20 ">
              <div className=" w-[100%] mdl:w-[80%]  flex flex-col gap-2  mdl:gap-5 pl-0">
                <h1 className="text-white text-3xl font-bold">
                  {movieDetail.Title}
                </h1>
                <div className="grid grid-cols-2 text-blue-300 font-bold">
                  <p className="mr-[20px]">
                    IMDB Rating : {movieDetail.imdbRating}
                  </p>
                  <p className="mr-[20px] truncate">
                    IMDB Votes: {movieDetail.imdbVotes}
                  </p>
                  <p className="mr-[20px]">Runtime: {movieDetail.Runtime}</p>
                  <p className="">Year: {movieDetail.Year}</p>
                </div>
                <h3 className="text-white font-semibold hidden mdl:block">
                  {movieDetail.Plot}
                </h3>
                <div className="flex gap-7">
                  <div className="flex flex-col gap-1 mdl:gap-3">
                    <h3 className="text-white font-bold">Director</h3>
                    <h3 className="text-white font-bold">Stars</h3>
                    <h3 className="text-white font-bold">Generes</h3>
                    <h3 className="text-white font-bold">Award</h3>
                  </div>
                  <div className="flex flex-col gap-1 mdl:gap-3 overflow-hidden">
                    <p className="text-blue-300 font-semibold truncate overflow-hidden">
                      {movieDetail.Director}
                    </p>
                    <p className="text-blue-300 font-semibold truncate">
                      {movieDetail.Actors}
                    </p>
                    <p className="text-blue-300 font-semibold truncate">
                      {movieDetail.Genre}
                    </p>
                    <p className="text-blue-300 font-semibold truncate">
                      2 {movieDetail.Awards}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mdl:w-[30%]">
                <img
                  src={movieDetail.Poster}
                  className="w-full h-[300px] sml:w-[70%] mdl:w-full  mx-auto object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieListing;

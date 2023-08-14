import { useSelector } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';

const MovieCard = () => {
  const { movieDetail } = useSelector((state) => state.movies);
  return (
    <section className=" w-full min-h-screen lgl:h-screen">
      {Object.keys(movieDetail).length === 0 ? (
        <h1>Loading...</h1>
      ) : (
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
      )}
    </section>
  );
};

export default MovieCard;

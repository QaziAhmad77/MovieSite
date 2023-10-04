import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clickFunction } from '../ReduxStore/MovieSlice';

const MovieCard = ({ title, year, poster, imdbID, openModalMovie }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        openModalMovie(imdbID);
        dispatch(clickFunction(true));
      }}
      className="bg-bodyColor flex flex-col gap-5 h-[500px] overflow-hidden m-3 border-b-[5px] border-red-600"
    >
      <div className="w-full h-[70%]">
        <img
          className="w-full h-full object-cover hover:scale-110 duration-300"
          src={poster}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3 w-full h-[30%] text-white font-bold p-3 text-xl">
        <p>{title}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;

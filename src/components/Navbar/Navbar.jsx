import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsMoonStarsFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../ReduxStore/AlertSlice';
import BaseUrl from '../../common/BaseUrl';
import { apiKey } from '../../common/ApiKey';
import { getMovies, getShows } from '../ReduxStore/MovieSlice';

const Navbar = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      alert('Please enter a name');
    } else {
      Movies(name);
      setName('');
    }
  };

  const Movies = async (name) => {
    try {
      dispatch(showLoading());
      const response1 = await BaseUrl.get(
        `?apikey=${apiKey}&s=${name ?? 'fighting'}&type=movie`
      );
      const response2 = await BaseUrl.get(
        `?apikey=${apiKey}&s=${name ?? 'love'}&type=series`
      );
      const movieData = response1.data;
      const showData = response2.data;
      dispatch(getMovies(movieData));
      dispatch(getShows(showData));
      dispatch(hideLoading());
    } catch (err) {
      console.log(err, 'something went wrong');
    }
  };
  useEffect(() => {
    Movies();
  }, [dispatch]);
  return (
    <nav className="w-full bg-bodyColor p-3">
      <div className="flex justify-between items-center px-8">
        {/* Logo */}
        <h4 className="font-bold tracking-wide text-xl hidden mdl:block">
          <span className="text-blue-400">Movie</span> App
        </h4>
        {/* Search bar */}
        <form
          onSubmit={handlerSubmit}
          className="flex items-center justify-center w-full mdl:w-auto  h-[40px]"
        >
          <div className="group h-full w-[500px]">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="search movies or shows"
              className="h-full w-full pl-2 text-xl text-black outline-none border-2 focus:border-red-500"
              type="text"
            />
          </div>
          <button
            type="submit"
            className="bg-searchBg text-black h-full text-2xl flex items-center justify-center border-l-2 border-lightText px-2"
          >
            <BiSearch />
          </button>
        </form>
        {/* Theme toggle button  */}
        <div className="text-2xl text-white hidden xl:block">
          <BsMoonStarsFill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useSelector } from 'react-redux';
import MovieListing from '../MovieListing/MovieListing';

const Home = () => {
  const { isLoading } = useSelector((state) => state.alert);
  return isLoading ? (
    <h2 className="text-4xl h-screen text-center">Loading...</h2>
  ) : (
    <MovieListing />
  );
};

export default Home;

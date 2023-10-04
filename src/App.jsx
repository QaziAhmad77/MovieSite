import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <>
      <div className="bg-blue-500 w-full h-auto text-lightText -z-20">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Main Content */}
                <main className="my-0 w-full h-auto mb-[50px]">
                  <Home />
                </main>
              </>
            }
          />
          {/* <Route path="/movieDetail/:imdbID" element={<MovieDetail />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  const { isLoading } = useSelector((state) => state.alert);
  console.log(isLoading);
  return (
    <>
      <div className="bg-blue-500 w-full h-auto text-lightText -z-20">
        <Navbar />
        {/* Main Content */}
          <main className="my-0 mx-12 mb-[50px]">
            <Home />
          </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

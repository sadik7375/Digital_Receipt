import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
             <div className="bg-gray-200 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Website!
        </h1>
        <p className="text-lg text-gray-600">
          Explore our services and discover a world of possibilities.
        </p>
        {/* Add more content or components here */}
      </div>

           <Footer></Footer>
        </div>
    );
};

export default Home;
import FinishedCard from '../components/FinishedCard';
import UpcomingCard from '../components/UpcomingCard';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Howits from '../components/Howits';
import Footer from '../components/Footer';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GetLogin } from '../Store/store';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState(null);

  // Fetch products from API
  const getProducts = async () => {
    try {
      const res = await axios.get('https://auction-1-853o.onrender.com/api/v3/getProduct');
      if (res) {
        setProducts(res.data.data);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-amber-400 flex max-sm:flex-col-reverse max-md:flex-col-reverse justify-between items-center w-full h-full">
        <div className="p-3 text-center w-1/2 self-center">
          <h1 className="text-5xl m-5">The best place</h1>
          <h1 className="font-semibold text-5xl m-5">to buy and sell!</h1>
          {!GetLogin() && (
            <Link to="/register">
              <div className="w-full flex justify-center">
                <button className="bg-black text-white pl-5 pr-5 pt-3 pb-3 rounded-md font-bold m-5 flex gap-2">
                  Register
                  <span className="text-orange-400 font-bold">
                    <ChevronRight />
                  </span>
                </button>
              </div>
            </Link>
          )}
        </div>
        <div className="w-full flex justify-center items-center h-full">
          <img
            src="https://res.cloudinary.com/dve8r06ul/image/upload/v1733240064/auctionhome1_tcipqj.avif"
            alt="Auction Home"
            className="h-full"
          />
        </div>
      </div>

      {/* Current Auctions Section */}
      <div className="w-full flex justify-start mt-10 mb-10 pl-10">
        <p className="font-light text-4xl text-gray-400">
          <span className="font-bold text-black">Current </span> Auctions
        </p>
      </div>
      <div className="flex overflow-x-auto">
        {products ? (
          products.map((item, index) =>
            item.originalPrice.length > 10 && (
              <UpcomingCard key={index} {...item} />
            )
          )
        ) : (
          <p>Loading products...</p>
        )}
      </div>

      {/* Finished Auctions Section */}
      <div className="w-full flex justify-start mt-10 mb-10 pl-10">
        <p className="font-light text-4xl text-gray-400">
          <span className="font-bold text-black">Finished </span> Auctions
        </p>
      </div>
      <div className="flex overflow-x-auto">
        <FinishedCard />
      </div>

      {/* Additional Sections */}
      <Howits />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

import { MonitorCog, ThumbsUp } from 'lucide-react';
import {Navbar} from './Navbar'
import {Howits} from './Howits'
import Footer from './Footer';
export const About = () => {
  return (
    <>
      <Navbar/>
      <div className="w-screen h-auto bg-gray-100 pt-14">
        <h1 className="font-bold text-black text-3xl text-center p-5">
          About <span className="font-thin text-gray-500">Us</span>
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center p-5 gap-10 lg:gap-20">
          <div className="flex items-center gap-5 lg:gap-10">
            <div className="p-5 rounded-full w-[100px] h-[100px] bg-amber-500 flex justify-center items-center">
              <MonitorCog size={50} className="text-white" />
            </div>
            <div>
              <h2 className="text-black text-lg lg:text-xl font-semibold">
                Quality products for the best customers
              </h2>
            </div>
          </div>
          <p className="text-gray-500 text-center lg:text-left max-w-lg">
            Online Auction features a wide variety of quality products at wholesale prices with our main locations in Coimbatore, CA, and Phoenix, AZ. We strive to make sure our customers are completely satisfied with their purchase.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center p-5 gap-10 lg:gap-20">
          <div className="flex items-center gap-5 lg:gap-10">
            <div className="p-5 rounded-full w-[100px] h-[100px] bg-amber-500 flex justify-center items-center">
              <ThumbsUp size={50} className="text-white" />
            </div>
            <div>
              <h2 className="text-black text-lg lg:text-xl font-semibold">
                More than 20 years of auction experience
              </h2>
            </div>
          </div>
          <p className="text-gray-500 text-center lg:text-left max-w-lg">
            We have the knowledge and ability to handle any type of auction. We handle small local sales and large multiple-day, multi-million dollar auctions. Our services are tailored to fit each client's needs.
          </p>
        </div>
      </div>
      <Howits/>
      <Footer/>
    </>
  );
};

export default About;

import { useState } from "react";
import Logo from "../assets/online-auction logo.webp";
import {Link} from 'react-router-dom'
const AdmNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white text-black shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <div className="text-2xl font-bold flex items-center">
            <img src={Logo} alt="Logo" className="h-[34px] w-[200px]" />
          </div>
          <button
            className="block md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          <ul
            className={`flex flex-col md:flex-row md:items-center md:space-x-6 absolute md:static bg-white w-full md:w-auto top-16 md:top-0 left-0 transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            } md:translate-x-0`}
          >
            <li className="py-2 px-4 text-center hover:bg-blue-700 md:hover:bg-transparent">
              <a href="/" className="block font-bold text-xl">
                Home
              </a>
            </li>
            <li className="py-2 px-4 text-center hover:bg-blue-700 md:hover:bg-transparent">
              <a href="#" className="block font-bold text-xl">
                Message
              </a>
            </li>
            <li className="py-2 px-4 text-center hover:bg-blue-700 md:hover:bg-transparent">
              <a href="#" className="block font-bold text-xl">
                Add Products
              </a>
            </li>
            <li className="py-2 px-4 text-center hover:bg-blue-700 md:hover:bg-transparent">
              <a href="#" className="block font-bold text-xl">
                Current Auction
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AdmNav;

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/online-auction logo.webp';

export const Navbar = ({ name }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <div className='fixed w-screen h-[70px] bg-[#f8f8f8] border flex items-center justify-between z-50'>
        {/* Logo and Sidebar Toggle */}
        <div className='flex items-center space-x-4'>
          <div className='lg:hidden' onClick={toggleSidebar}>
            {isSidebarOpen ? <X size={30} /> : <Menu size={30} />}
          </div>
          <img src={Logo} alt='Logo' className='h-[34px] w-[200px]' />
        </div>
        <p className='hidden lg:block text-lg font-bold'>{name}</p>
        <div className='hidden lg:flex space-x-6'>
          <Link to='/' className='hover:underline'>
            Home
          </Link>
          <Link to='/aboutus' className='hover:underline'>
            About Us
          </Link>
          <Link to='/login' className='hover:underline'>
            Login
          </Link>
          <Link to='/register' className='hover:underline'>
            Register
          </Link>
          <Link to='/admin' className='hover:underline'>
            Admin Login
          </Link>
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      {isSidebarOpen && (
        <div className='fixed top-[70px] left-0 w-[70%] h-full bg-[#f8f8f8] shadow-lg z-40 lg:hidden'>
          <div className='flex flex-col p-4 gap-6'>
            <Link
              to='/'
              className='text-lg font-medium hover:bg-gray-200 p-2 rounded'
              onClick={toggleSidebar}
            >
              Home
            </Link>
            <Link
              to='/aboutus'
              className='text-lg font-medium hover:bg-gray-200 p-2 rounded'
              onClick={toggleSidebar}
            >
              About Us
            </Link>
            <Link
              to='/login'
              className='text-lg font-medium hover:bg-gray-200 p-2 rounded'
              onClick={toggleSidebar}
            >
              Login
            </Link>
            <Link
              to='/register'
              className='text-lg font-medium hover:bg-gray-200 p-2 rounded'
              onClick={toggleSidebar}
            >
              Register
            </Link>
            <Link
              to='/admin'
              className='text-lg font-medium hover:bg-gray-200 p-2 rounded'
              onClick={toggleSidebar}
            >
              Admin Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

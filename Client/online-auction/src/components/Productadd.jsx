import React, { useRef, useState } from 'react';
import axios from 'axios';
import {AdmNav} from './AdmNav'
import { Loader2, LoaderCircle } from 'lucide-react';
export const Productadd = () => {
  const productNameRef = useRef();
  const productDetailsRef = useRef();
  const originalPriceRef = useRef();
  const auctionPriceRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
   const [loading,setLoading]=useState(false);
const handleSubmit = async (e) => {
  setLoading(true);
    e.preventDefault();
    const productData = {
      name: productNameRef.current.value,
      details: productDetailsRef.current.value,
      originalPrice: originalPriceRef.current.value,
      auctionPrice: auctionPriceRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
    };
    try {
      const response = await axios.post('https://auction-1-853o.onrender.com/api/v3/products', productData);
      console.log(response.data);
      alert('Product added successfully!');
      loading(false);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the product.');
    }
    finally{
      loading(false);
    }
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center pt-10">
        <div className="w-[400px] h-auto border border-black rounded-md p-5 align-middle">
          <form className="max-w-sm mx-auto border-solid border-spacing-2 border-black" onSubmit={handleSubmit}>
            <h1 className="text-center pt-3 font-bold text-black">Add Product</h1>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
              <input placeholder='Name' type="text" ref={productNameRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5" required />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Details</label>
              <input  placeholder='details' type="text" ref={productDetailsRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5" required />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Original Price</label>
              <input placeholder='originalPrice' type="number" ref={originalPriceRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5" required />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Auction Price</label>
              <input placeholder='auctionPrice'  type="number" ref={auctionPriceRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5" required />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Date</label>
              <input placeholder='auctionPrice' type="date" ref={dateRef} id="date" name="date" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Time</label>
              <input placeholder='date' type="time" ref={timeRef} id="time" name="time" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex justify-center">{!loading?("Add"):(<div className='animate-spin'><LoaderCircle/></div>)}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Productadd;

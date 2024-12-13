import React from 'react';

const UpcomingCard = ({ time, originalPrice, name, details, auctionPrice, date }) => {
  return (
    <div className="w-[300px] h-full flex flex-col space-y-5 m-10 border border-gray-200 shadow-lg rounded-lg">

      <div className="w-40 h-10 bg-slate-400 flex justify-center items-center font-semibold rounded-lg">
        Time: {time} PM ⏳
      </div>

      <div className="w-full h-[150px] flex justify-center items-center">
        <img
          src={originalPrice}
          alt={name}
          className="object-contain h-full rounded-md"
        />
      </div>

      <div className="text-center font-medium text-gray-700">
        {name} - {details}
      </div>
      <div className="text-center text-sm text-gray-500">
        Auction Date: {date}
      </div>
      <div className="text-center text-lg font-bold text-green-600">
        ₹{auctionPrice}
      </div>
      <div className="bg-yellow-300 text-center p-3 cursor-pointer rounded-lg hover:bg-yellow-400 transition duration-300">
        Bid now!
      </div>
    </div>
  );
};

export default UpcomingCard;

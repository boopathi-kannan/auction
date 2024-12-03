import React from 'react'
import FinishedCard from '../components/FinishedCard'
import UpcomingCard from '../components/UpcomingCard'
const Home = () => {
  return (
    <>
    <div className='bg-amber-400 flex flex-row justify-between w-full'>
      <div className='p-3 text-center w-1/2 self-center'>
        <h1 className='text-5xl m-5'>The best place</h1>
        <h1 className='font-semibold text-5xl m-5'>to buy and sell!</h1>
        <button className='bg-black text-white p-3 font-medium m-5'>Register</button>
      </div>
    <div className='w-1/2'>
      <img src='https://res.cloudinary.com/dve8r06ul/image/upload/v1733240064/auctionhome1_tcipqj.avif' className='h-full'/>
    </div>
    </div>
  )
}

export default Home
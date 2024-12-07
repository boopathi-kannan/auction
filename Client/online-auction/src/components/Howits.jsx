
import {Mouse} from 'lucide-react'
import { ShoppingCart } from 'lucide-react';
import { AlarmClockCheck } from 'lucide-react';
import { Trophy } from 'lucide-react';
export const  Howits=()=> {
  return (
    <>
    <div className="bg-gray-300">
      <h1 className="text-black font-bold text-center text-3xl p-5">How <span className="text-gray-500 text-3xl font-thin">it Works</span></h1>
      <div className='flex justify-center w-full'>
      <div className="flex flex-col p-6 w-1/2 ">
        <div className=' p-5 rounded-full w-[100px] h-[100px] bg-amber-400 flex justify-center items-center'>
           <Mouse size={100}/>
        </div>
        <h2 className='text-black p-5 font-bold text-2xl'>Register</h2>
        <p className='p-5 text-gray-600'>To start using our auction, you'll need to register. It's completely free and requires just a few clicks!.</p>
      </div>
      <div className="flex flex-col p-6 w-1/2 ">
        <div className=' p-5 rounded-full w-[100px] h-[100px] bg-amber-400 flex justify-center items-center'>
           <ShoppingCart size={100}/>
        </div>
        <h2 className='text-black p-5 font-bold text-2xl'>Buy or Bid</h2>
        <p className='p-5 text-gray-600'>You can instantly buy or place a bid on any desired product right after registration on our website.</p>
      </div>
      </div>
      <div className='flex justify-center w-full'>
      <div className="flex flex-col p-6 w-1/2 ">
        <div className=' p-5 rounded-full w-[100px] h-[100px] bg-amber-400 flex justify-center items-center'>
           <AlarmClockCheck size={100}/>
        </div>
        <h2 className='text-black p-5 font-bold text-2xl'>Submit a Bid</h2>
        <p className='p-5 text-gray-600'>Submitting a bid to our auction is quick and easy. The process takes approximately 5 minutes.</p>
      </div>
      <div className="flex flex-col p-6 w-1/2 ">
        <div className=' p-5 rounded-full w-[100px] h-[100px] bg-amber-400 flex justify-center items-center'>
           <Trophy size={100}/>
        </div>
        <h2 className='text-black p-5 font-bold text-2xl'>Win</h2>
        <p className='p-5 text-gray-600'>Easily win at our acution and enjoy owning the product you dream of after the bidding is closed</p>
      </div>
      </div>
    </div>
    </>
  )
}

export default Howits
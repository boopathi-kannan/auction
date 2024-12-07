import { MonitorCog } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';

export const About=()=> {
  return (
    <>
      <div>
        <h1 className="font-bold text-black text-3xl text-center p-5">About <span className="font-thin text-gray-500">Us</span></h1>
        <div className="flex flex-col p-5">
          <div className="flex flex-row p-5">
          <div className=' p-5 rounded-full w-[100px] h-[100px] bg-amber-500 flex justify-center items-center'>
           <MonitorCog size={100}/>
        </div>
        <div className='text-center p-7'>
        <h2 className="text-black text-xl">Quality products for the best customers</h2>
        </div>
          </div>
          <p className='text-gray-500 p-5'>Online Auction features a wide variety of quality products at wholesalw prices with our main locations in Coimbatore. CA and Phoenix,AZ. We strive to make sure our customers are completely statisfied with thier purchase. </p>

        </div>
        <div className="flex flex-col p-5">
          <div className="flex flex-row p-5">
          <div className=' p-5 rounded-full w-[100px] h-[100px] bg-amber-500 flex justify-center items-center'>
           <ThumbsUp size={100}/>
        </div>
        <div className='text-center p-7'>
        <h2 className="text-black text-xl">More than 20 years of auction experience</h2>
        </div>
          </div>
          <p className='text-gray-500 p-5'>We have the knowledge and ability to handle any type of acution. We handle small local sales, and large multiple-day, multi-million dollar auctions. Our services are tailored to fit each client's needs.</p>

        </div>
        
      </div>
    </>
  )
}

export default About
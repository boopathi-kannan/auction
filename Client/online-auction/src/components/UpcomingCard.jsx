import React from 'react'

const UpcomingCard = () => {
  return (
    <>
    <div className='p-20 bg-slate-100'>
    <h1 className='text-4xl'><span className='font-bold'>Current</span> Auctions</h1>
    <div className='flex flex-row justify-around pt-9 w-full'>
      <div className='flex flex-col justify-around gap-7 w-1/4 '>
      <div className='bg-gray-400 text-center w-44 m-5  '>
          <p className='p-5'>12:55:52</p>
    
        </div>
        <img src='https://res.cloudinary.com/dve8r06ul/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1733250026/maclap_pglwex.webp' className='ml-5 w-52 h-40'/>
        <p className='text-gray-400 pl-5'>Price:Rs 1000000</p>
        <h1 className='pl-5'>Rs 500000</h1>
       
        <h3 className=''>Apple MacBook Air 13" 1.8GHZ 128GB </h3>
        <button className='bg-amber-400 p-4 text-black font-bold m-5 w-48 rounded-xl' >Submit a bid</button>
      </div>
      <div className='flex flex-col justify-around gap-7 w-1/4 '>
      <div className='bg-gray-400 text-center w-44 m-5 '>
          <p className='p-5'>06:54:12</p>
         
        </div>
        <img src='https://res.cloudinary.com/dve8r06ul/image/upload/v1733250166/image20_hreu2a.jpg' className='ml-5 w-52 h-40'/>
        <p className='text-gray-400 pl-5'>Price:Rs 2000</p>
        <h1 className='pl-5'>Rs 600</h1>
        
        <h3 className='pl-5'>Billienblush Girls Blue Fluffy Cardigan</h3>
        <button className='bg-amber-400 p-4 text-black font-bold m-5 w-48 rounded-xl' >Submit a bid</button>
      
      </div>

      <div className='flex flex-col justify-around gap-7 w-1/4'>
      <div className='bg-gray-400 text-center w-44 m-5 '>
          <p className='p-5'>00:39:12</p>
          
        </div>
        <img src='https://res.cloudinary.com/dve8r06ul/image/upload/v1733250274/images_2_qipzba.jpg' className='ml-5 w-52 h-40'/>
        <p className='text-gray-400 pl-5'>Price:Rs 50000</p>
        <h1 className='pl-5'>Rs 30000</h1>
        <h3 className='pl-5'>Apple Mac mini Late (MRTT2)</h3>
        <button className='bg-amber-400 p-4 text-black font-bold m-5 w-48 rounded-xl' >Submit a bid</button>
       
        
      </div>
      <div className='flex flex-col justify-around gap-7 w-1/4 '>
       <div className='bg-gray-400 text-center w-44 m-5 '>
          <p className='p-5'>18:00:52</p>
         
        </div>
        <img src='https://res.cloudinary.com/dve8r06ul/image/upload/v1733250373/images_3_rlef97.jpg' className='ml-5 w-52 h-40'/>
        <p className='text-gray-400 pl-5'>Price:Rs 2000</p>
        <h1 className='pl-5'>Rs 500</h1>
        <h3 className='pl-5'>Lacoste Lerond Leather Trainers</h3>
        <button className='bg-amber-400 p-4 text-black font-bold m-5 w-48 rounded-xl' >Submit a bid</button>
       
        
      </div>




    </div>
    <button className='bg-black text-white p-5 w-52 m-5 font-bold rounded-lg'>View all auction</button>
    </div>
    </>
  )
}

export default UpcomingCard
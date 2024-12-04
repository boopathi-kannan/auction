import React from 'react'

const FinishedCard = () => {
  return (
    <>
        <div className='w-[300px] h-[300px] border-black flex-col justify-center items-center flex m-20'>
           <div className='w-[60%] h-20 bg-yellow-300'>
            <p className='text-center'>Final Price</p>
            <p className='text-center font-bold'>Rs.100000</p>
           </div>
           <div className='w-[300px] h-[300px]'>
            <img src="https://tse2.mm.bing.net/th?id=OIP.yh2ecxs40c2UsMakWy9QLAHaHa&pid=Api&P=0&h=220" alt="" className='w-full h-full  '/>
           </div>
           <div className='font-light'>Apple MacBook Pro 13" 2.3GHZ 128GB ROM Space Grey🎉</div>
           <div className='w-full h-full justify-end flex text-gray-400'>
            -Sold out
          </div>
        </div>
    </>
  )
}

export default FinishedCard
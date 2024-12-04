import React from 'react'

const UpcomingCard = () => {
  return (
    <>
        <div className='w-[300px] h-[300px] flex flex-col space-y-5 m-10'>
             <div className='w-40 h-10 bg-slate-400 flex justify-center items-center font-semibold'>12:55:52⏳</div>
             <div>
                <img src="https://res.cloudinary.com/dve8r06ul/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1733250026/maclap_pglwex.webp" alt="" />
             </div>
             <div>
               Apple macBook Air 13" 1.8GHZ 128GB🤩
             </div>
             <div className='bg-yellow-300 text-center p-3'>Bid now!</div>
        </div>
    </>
  )
}

export default UpcomingCard
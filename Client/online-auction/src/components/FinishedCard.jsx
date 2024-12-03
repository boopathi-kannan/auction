import React from 'react'

const FinishedCard = () => {
  return (
    <>
    <div className='p-20'>
    <h1 className='text-4xl'><span className='font-bold'>Finished</span> Auction</h1>
    <div className='flex flex-row justify-around pt-9 w-full'>
      <div className='flex flex-col justify-around gap-7 w-1/4'>
      <div className='bg-amber-400 text-center w-44 m-5  '>
          <p>Final Price</p>
          <h1 className='font-bold'>Rs.1000000</h1>
        </div>
        <img src='https://res.cloudinary.com/dve8r06ul/image/upload/v1733244662/images_1_wweov1.jpg' className='ml-5 w-52 h-40'/>
        
        <h3>Apple MacBook Pro 13" 2.3GHZ 128GB Space Gray</h3>
      </div>
      <div className='flex flex-col justify-around gap-7 w-1/4'>
      <div className='bg-amber-400 text-center w-44 m-5 '>
          <p>Final Price</p>
          <h1 className='font-bold'>Rs.20000</h1>
        </div>
        <img src='https://res.cloudinary.com/dve8r06ul/image/upload/v1733247183/tab_wjmsqg.jpg' className='ml-5 w-52 h-40'/>
      
        <h3>Apple iPad Pro 11" Wi-Fi 64GB Silver</h3>
      </div>

      <div className='flex flex-col justify-around gap-7 w-1/4'>
      <div className='bg-amber-400 text-center w-44 m-5 '>
          <p>Final Price</p>
          <h1  className='font-bold'>Rs.150</h1>
        </div>
        <img src='https://res.cloudinary.com/dve8r06ul/image/upload/v1733247264/sunglasses-500x500_hcupf6.webp' className='ml-5 w-52 h-40'/>
       
        <h3>Ray-Ban High Street 54 mm Sunglasses</h3>
      </div>
      <div className='flex flex-col justify-around gap-7 w-1/4 '>
       <div className='bg-amber-400 text-center w-44 m-5 '>
          <p>Final Price</p>
          <h1 className='font-bold'>Rs.550</h1>
        </div>
        <img src='https://res.cloudinary.com/dve8r06ul/image/upload/v1733247345/bbce9a32562c4a4f9a6377da9cc7b729_ocx1fa.webp' className='ml-5 w-52 h-40'/>
       
        <h3>Pier One Classic Dark Blue Ankle Boots</h3>
      </div>




    </div>
    </div>
    </>
  )
}

export default FinishedCard
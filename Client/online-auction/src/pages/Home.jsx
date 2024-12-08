
import FinishedCard from '../components/FinishedCard'
import UpcomingCard from '../components/UpcomingCard'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Howits from '../components/Howits'
import About from '../components/About'
import Footer from '../components/Footer'
import {ChevronRight} from 'lucide-react'
import {Link} from 'react-router-dom'
import Auctionpage from '../components/Auctionpage'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='bg-amber-400 flex max-sm:flex-col-reverse max-md:flex-col-reverse justify-between items-center w-full h-full'>
      <div className='p-3 text-center w-1/2 self-center'>
        <h1 className='text-5xl m-5'>The best place</h1>
        <h1 className='font-semibold text-5xl m-5'>to buy and sell!</h1>
        <Link to='/register'><div className='w-full flex justify-center'> <button className='bg-black text-white pl-5 pr-5 pt-3 pb-3 rounded-md font-bold m-5 flex gap-2'>Register<span className='text-orange-400 font-bold'><ChevronRight /></span> </button></div></Link>
      </div>
    <div className='w-full flex justify-center items-center h-full'>
      <img src='https://res.cloudinary.com/dve8r06ul/image/upload/v1733240064/auctionhome1_tcipqj.avif' className='h-full'/>
    </div>
    </div>
    <div className='w-full flex justify-start mt-10 mb-10 pl-10'>
      <p className='font-light text-4xl text-gray-400'>
        <span className='font-bold text-black'>Finished </span> Auctions
      </p>
    </div>
  <div className='flex overflow-x-auto'>
  {[...Array(10)].map((_, index) => (
    <FinishedCard key={index} />
  ))}
 </div>
 <div className='w-full flex justify-start mt-10 mb-10 pl-10'>
      <p className='font-light text-4xl text-gray-400'>
        <span className='font-bold text-black'>Current </span> Auctions
      </p>
    </div>
 <div className='flex overflow-x-auto'>
  {[...Array(10)].map((_, index) => (
    <UpcomingCard key={index} />
  ))}
 </div>
 <Howits/>
 <Contact/>
 <Footer/>
 <Auctionpage/>

    </>
  )
}
export default Home;
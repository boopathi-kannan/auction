import React, { useState } from 'react'
import {Menu,EllipsisVertical,ArrowLeft,Phone} from 'lucide-react'
import Logo from '../assets/online-auction logo.webp'
import Contact from '../components/Contact'
import Howits from '../components/Howits'
import About from '../components/About'
import Footer from '../components/Footer'
import Login from '../components/Login'
import Signin from '../components/Signin'
import {Link} from 'react-router-dom'
const Navbar = ({name}) => {
    const [scroll,setScroll]=useState(false);
    const [change,setChange]=useState(true);
    const [downbar,setDownbar]=useState(false);
    const handleNavbar=()=>{
      setScroll(true);
      setChange(true);
        setTimeout(() => {
            setScroll(false);
        },450);
        setTimeout(() => {
          setChange(false);
      },600);
    };
    const handleDownbar=()=>{
       setDownbar(!downbar);
    }
  return (
    <>
    <div className='w-screen h-[70px] bg-[#f8f8f8] border flex fixed'>
            <div className='flex justify-start items-center space-x-4'>
            <div className={scroll?(`h-8 flex justify-start items-center p-1 animate-spin`):(`h-8 flex justify-start items-center p-1`)} onClick={handleNavbar}>
                {change?<Menu size={40}/>:<ArrowLeft size={40}/>}
                </div>
                <img src={Logo} alt="" className='h-[34px] w-[200px]'/>
            </div>
            <p>{name}</p>
            <div className='w-full flex justify-end items-center p-2'><EllipsisVertical size={35} onClick={handleDownbar}/></div>
    </div>
      {
        downbar&&(
        <div className='w-screen flex justify-end fixed right-0 top-20'>
        <div className='w-[80%] h-auto bg-[#f8f8f8] p-8'>
             <div className='w-full h-full flex flex-col'>
              <div className='w-full flex'>
                <div className='w-[20%] h-[50%] flex items-center justify-center'>
                    <Phone fill='orange'size={40}/>
                </div>
                <div className='w-full text-2xl flex flex-col'>
                    <div className='w-full flex justify-start items-center'>
                        Freephone
                    </div>
                    <div className='w-full flex justify-start items-center'>
                       800-2345-6789
                    </div>
                </div>
                </div>
                <div className='w-full h-[80%] flex flex-col'>
                  <div>
                    Opening Hours 8am-8pm PST M-Th;6am-3pm PST Fri
                  </div>
                  <div className='flex flex-col w-full gap-3'>
                     <Link to='/login'><button className='bg-black text-white pl-5 pr-5 pt-3 pb-3 rounded-md w-full'>Login</button></Link>
                      <Link to='/register'><button className='bg-yellow-400 text-white pl-5 pr-5 pt-3 pb-3 rounded-md w-full'>Register</button></Link>
                  </div>
                </div>
                </div>
        </div>
        </div>
        )
      }
   </>
  );
}

export default Navbar
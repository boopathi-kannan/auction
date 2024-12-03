import React, { useState } from 'react'
import {Menu,EllipsisVertical,ArrowLeft} from 'lucide-react'
import Logo from '../assets/online-auction logo.webp'
const Navbar = ({name}) => {
    const [scroll,setScroll]=useState(true);
    const handleNavbar=()=>{
        setScroll(true);
        setTimeout(() => {
            setScroll(false);
        },350);
    };
  return (
    <div className='w-screen h-[70px] bg-[#f8f8f8] border border-black flex'>
            <div className='flex justify-start items-center space-x-4'>
            <div className={scroll?(`h-8 flex justify-start items-center p-1 animate-spin`):(`h-8 flex justify-start items-center p-1`)} onClick={handleNavbar}>
                {!scroll?<Menu size={40}/>:<ArrowLeft size={40}/>}
                </div>
                <img src={Logo} alt="" className='h-[34px] w-[200px]'/>
            </div>
            <p>{name}</p>
            <div className='w-full flex justify-end items-center p-2'><EllipsisVertical size={35}/></div>
    </div>
  );
}

export default Navbar
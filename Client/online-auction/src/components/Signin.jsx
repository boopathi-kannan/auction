import {ChevronRight} from 'lucide-react'
import Howits from '../components/Howits'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import { Loader } from 'lucide-react'
import {Navigate} from "react-router-dom"
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Signin=()=> {
  const [RedirecttoLogin,setRedirecttoLogin]=useState(false);
  const [loading,setLoading]=useState(false);
  const emailref=useRef(null);
  const nameref=useRef(null);
  const password1ref=useRef(null);
  const password2ref=useRef(null);
  const handleRegister=async()=>{
      setLoading(!loading);
      if(password1ref.current.value!=password2ref.current.value)
      {
        const notify = () => toast.warn("Passwords not match!");
        notify();
        return;
      }
      const Email=emailref.current.value;
      const Password=password1ref.current.value;
      const Name=nameref.current.value;
      const data1={
        Email:Email,
        Name:Name,
        Password:Password,
      }
      try{
      const res=await axios.post('https://auction-1-853o.onrender.com/api/v1/Register',data1);
      if(res.status==201)
      {
        const notify = () => toast(res.data.message);
        notify();
        setTimeout(()=>setRedirecttoLogin(true),1000);
      }
      else if(res.status==400)
      {
        const notify = () => toast.error("user already exists");
        notify();
      }
      else
      {
        const notify = () => toast.error(res.data.message);
        notify();
      }
    }
    catch(err){
      const notify = () => toast.error(err.message);
      notify();
    }
  }
  if(RedirecttoLogin)
    {
      return <Navigate to={"/login"}/>
    }
  return (
    <>
    <ToastContainer/>
  <Navbar/>
     <div className="w-screen h-screen  flex justify-center items-center">
     <div className="w-[400px] h-auto border border-black rounded-md p-5">
    <h1 className="text-center text-2xl font-bold">Register!</h1>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input ref={emailref} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
    <input ref={nameref} type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Username" />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create Password</label>
    <input ref={password1ref} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Create password" />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
    <input ref={password2ref} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Confirm Password" />
  </div>
  <div className='w-full justify-end flex font-bold'> <Link to='/login'>Already a user?</Link></div>
  <div className="flex flex-row justify-center">
  <button onClick={handleRegister} type="submit" className=" bg-yellow-400 pl-5 pr-5 pt-3 pb-3 rounded-lg cursor-pointer hover:bg-yellow-500 hover:text-white"><div className='flex gap-2 font-bold w-full justify-center items-center'>Register {loading?(<span className='animate-spin'><Loader color='black' size={'20'}/></span>):(<span><ChevronRight color='black' size={'25'}/></span>)}</div></button>
  </div>

</div>
</div>
<Howits/>
<Footer/>
    </>
  )
}

export default Signin
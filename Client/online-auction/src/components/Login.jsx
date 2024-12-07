import {ChevronRight} from 'lucide-react'
import Howits from '../components/Howits'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import { Loader } from 'lucide-react'
import axios from 'axios'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Login=()=> {
  const [loading,setLoading]=useState(false);
  const emailref=useRef(null);
  const passwordref=useRef(null);
  const handleLogin=async()=>{
      setLoading(!loading);
      const Email=emailref.current.value;
      const Password=passwordref.current.value;
      const data1={
        Email:Email,
        Password:Password
      }
      const res=await axios.post('http://localhost:19999/api/v1/Login',data1);
      if(res.status==200)
      {
        const notify = () => toast(res.data.message);
        notify();
      }
      else{
        const notify = () => toast.error(res.data.message);
        notify();
      }
  }
  return (
    <>
    <Navbar/>
    <div className="w-screen h-screen flex justify-center items-center">
    <div className="w-[400px] h-auto border border-black rounded-md p-5">
    <h1 className="text-center font-bold text-2xl">Login</h1>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input ref={emailref} type="email"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
    <input ref={passwordref} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Password" />
  </div>
  <div className='w-full justify-end flex font-bold'> <Link to='/register'>New user?</Link></div>
  <div className="flex flex-row justify-center">
  <button onClick={handleLogin} className=" bg-yellow-400 pl-5 pr-5 pt-3 pb-3 rounded-lg cursor-pointer hover:bg-yellow-500 hover:text-white"><div className='flex gap-2 font-bold w-full justify-center items-center'>Login {loading?(<span className='animate-spin'><Loader color='black' size={'20'}/></span>):(<span><ChevronRight color='black' size={'25'}/></span>)}</div></button>
  </div>
</div>
</div>
<Howits/>
<Footer/>
<ToastContainer />
    </>
  )
}

export default Login
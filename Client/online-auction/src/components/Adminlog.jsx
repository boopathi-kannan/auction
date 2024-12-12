import { Link, Navigate,useNavigate } from 'react-router-dom';
import {Navbar} from './Navbar'
import {useRef} from 'react'
export const Adminlog =()=> {
  const navigate = useNavigate();
  const emailref=useRef(null);
  const passwordref=useRef(null);
  const handleSend=()=>{
     if(emailref.current.value.trim()=="admin@admin" && passwordref.current.value.trim()=="admin")
     {
         return navigate('/admin');
     }
     }
  return (
    <>
    <Navbar/>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-[400px] h-auto border border-black rounded-md p-5">
          <h1 className="text-center font-bold text-2xl">Admin Login</h1>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input
              ref={emailref}
              type="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input
              ref={passwordref}
              type="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Password"
              required
            />
          </div>
       
          <div className="flex flex-row justify-center">
            <button onClick={handleSend}
              className="bg-yellow-400 pl-5 pr-5 pt-3 pb-3 rounded-lg cursor-pointer hover:bg-yellow-500 hover:text-white"
            >
              <div className="flex gap-2 font-bold w-full justify-center items-center">
                Login
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Adminlog
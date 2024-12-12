import { ChevronRight } from 'lucide-react';
import Howits from '../components/Howits';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';
import { Link, Navigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StoreData, GetData,SetLogin} from '../Store/store';

export const Login = () => {
  const navigate = useNavigate();
  const [RedirectToHome, setRedirectToHome] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async () => {
    setLoading(true);
    const Email = emailRef.current.value;
    const Password = passwordRef.current.value;
    const data1 = { Email, Password };

    try {
      const res = await axios.post('https://auction-1-853o.onrender.com/api/v1/Login', data1);
      if (res.status === 200) {
        const notify = () => toast(res.data.message);
        notify();
        StoreData(res.data.user);
        console.log(res.data);
        sessionStorage.setItem('id', res.data.user);
        console.log(sessionStorage.getItem('id'));
        const res1 = await axios.get('http://localhost:19999/api/v2/getData', {
          params: { Email: Email },
        });

        const userData = res1.data?.data;

        if (userData) {
          console.error("Existing user!");
          SetLogin(true);
          return navigate('/');
        }
        setTimeout(() => setRedirectToHome(true), 2000);
      } else {
        const notify = () => toast.error(res.data.message);
        notify();
      }
    } catch (err) {
      console.error(err);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (RedirectToHome) {
      return <Navigate to="/profile" />;
  }

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-[400px] h-auto border border-black rounded-md p-5">
          <h1 className="text-center font-bold text-2xl">Login</h1>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input
              ref={emailRef}
              type="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input
              ref={passwordRef}
              type="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Password"
              required
            />
          </div>
          <div className="w-full justify-end flex font-bold">
            <Link to="/register">New user?</Link>
          </div>
          <div className="flex flex-row justify-center">
            <button
              onClick={handleLogin}
              className="bg-yellow-400 pl-5 pr-5 pt-3 pb-3 rounded-lg cursor-pointer hover:bg-yellow-500 hover:text-white"
            >
              <div className="flex gap-2 font-bold w-full justify-center items-center">
                Login
                {loading ? (
                  <span className="animate-spin">
                    <Loader color="black" size={'20'} />
                  </span>
                ) : (
                  <span>
                    <ChevronRight color="black" size={'25'} />
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      <Howits />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Login;

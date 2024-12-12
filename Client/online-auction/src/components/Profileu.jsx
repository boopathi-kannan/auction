import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StoreData, GetData } from '../Store/store';
import {Navbar} from './Navbar'
import {Footer} from './Footer'
const Profileu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const storedData = GetData();
        const email = storedData?.Email;

        if (!email) {
          console.error("Email not found in stored data");
          return navigate('/userdetails');
        }

        const res = await axios.get('https://auction-1-853o.onrender.com/api/v2/getData', {
          params: { Email: email },
        });

        const userData = res.data?.data;

        if (!userData) {
          console.error("User data not found in the response");
          return navigate('/userdetails');
        }
        StoreData({ ...storedData, ...userData });
        console.log("Stored new data:", GetData());
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate('/userdetails'); 
      }
    };

    getData();
  }, [navigate]);

  return (
    <>
    <Navbar/>
    <div className="bg-amber-400 pt-20">
      <div className="flex flex-row justify-center bg-amber-400">
        <img
          src="https://res.cloudinary.com/dve8r06ul/image/upload/v1733824717/imagge_pfxzhs.avif"
          className="h-40"
          alt="Profile"
        />
      </div>
      <div className="flex flex-row justify-center pt-10">
        <h1 className="font-bold text-xl text-black pl-14">
          Name:
          <span className="font-normal text-lg text-black"> {GetData().Name}</span>
        </h1>
        <h1 className="font-bold text-xl text-black pl-14">
          E-mail:
          <span className="font-normal text-lg text-black"> {GetData().Email}</span>
        </h1>
      </div>
      <div className="flex flex-row justify-center pt-10">
        <h1 className="font-bold text-xl text-black pl-14">
          Gender:
          <span className="font-normal text-lg text-black"> {GetData().Gender}</span>
        </h1>
        <h1 className="font-bold text-xl text-black pl-14">
          Phone no: 
          <span className="font-normal text-lg text-black">  {GetData().Phone}</span>
        </h1>
      </div>
      <div className="flex flex-row justify-center">
        <button className="bg-black text-white p-3 rounded-xl text-center m-10 w-20">
          Auction
        </button>
        <button className="bg-black text-white p-3 rounded-xl text-center m-10 w-20">
          Bid
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Profileu;

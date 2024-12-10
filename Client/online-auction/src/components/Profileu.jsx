import { useEffect } from 'react';
import {Navbar} from './Navbar'
import axios from 'axios';
import { StoreData, GetData } from '../Store/store';
const Profileu = () => {
  const getData=async()=>{
       try {
         const res=await axios.get('http://localhost:19999/api/v2/getData',JSON.stringify(GetData().Email));
         let a=GetData();
         let b=res.data.data;
         StoreData({ ...a, ...b });
         console.log("Stored new data is :"+GetData());
         console.log(res);
       } catch (error) {
          console.log("Error"+error);
       }
  };
  useEffect(()=>getData(),[]);
  return (
    <>
  <div>
    <div className="bg-amber-400 pt-20">
<div className="flex flex-row justify-center bg-amber-400">
  <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1733824717/imagge_pfxzhs.avif" className="h-40"/>
</div>
<div className="flex flex-row justify-center pt-10">
<h1 className="font-bold text-xl text-black pl-14">Name:<span className="font-normal text-lg text-black">Boopathi</span></h1>
<h1 className="font-bold text-xl text-black pl-14" >E-mail:<span className="font-normal text-lg text-black">boopathi@gmail.com</span></h1>
</div>
<div className="flex flex-row justify-center pt-10">
<h1 className="font-bold text-xl text-black pl-14">Gender:<span className="font-normal text-lg text-black">Male</span></h1>
<h1 className="font-bold text-xl text-black pl-14" >P.no:<span className="font-normal text-lg text-black">89945458498</span></h1>
</div>
<div className="flex flex-row justify-center"> 
  <button className="bg-black text-white p-3 rounded-xl text-center m-10 w-20">Auction</button>
  <button  className="bg-black text-white p-3 rounded-xl text-center m-10 w-20">Bid</button>
</div>
<div>
</div>
</div>
  </div>
  </>
  )
};

export default Profileu; 






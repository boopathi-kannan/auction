import { useState } from "react"
import Adminh from "../components/Adminh"
import AdmNav from "../components/AdmNav"
import Emailform from "../components/Emailform"
import Productadd from "../components/Productadd"
const Admin =()=> {
  const [set,setSet]=useState(false);
  const swap=()=>{
    setSet(!set);
  }
  return (
    <div>
    
    <AdmNav/>
    <Adminh/>
    <div className="flex flex-row justify-center m-5">
      <button className="bg-black p-3 text-white text-center w-44 m-5 rounded-xl " onClick={swap}>Add Product</button>
      <button className="bg-black p-3 text-white text-center w-44 m-5 rounded-xl" onClick={swap}>Send E-mail</button>
    </div>
    {
      set?(
        <Emailform/>
      ):
      (
        <Productadd/>
      )
    }
    </div>
    
  )
}

export default Admin
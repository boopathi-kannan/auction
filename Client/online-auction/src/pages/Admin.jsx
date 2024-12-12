import Adminh from "../components/Adminh"
import AdmNav from "../components/AdmNav"
import Emailform from "../components/Emailform"
import Productadd from "../components/Productadd"
const Admin =()=> {
  return (
    <div>
    
    <AdmNav/>
    <Adminh/>
    <Productadd/>
    <div className="flex flex-row justify-center m-5">
      <button className="bg-black p-3 text-white text-center w-44 m-5 rounded-xl ">Add Product</button>
      <button className="bg-black p-3 text-white text-center w-44 m-5 rounded-xl">Send E-mail</button>
    </div>
    <Emailform/>
    </div>
    
  )
}

export default Admin
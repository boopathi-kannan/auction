import Home from './pages/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Howits from './components/Howits'
import About from './components/About'
import Footer from './components/Footer'
import Login from './components/Login'
import Signin from './components/Signin'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Profile from './pages/Profile'
import Admin from './pages/Admin';
import Profileu from './components/Profileu'
import Userfrom from './components/Userfrom';
import {Adminlog} from './components/Adminlog'
import {Productadd} from './components/Productadd'
import { Messages } from './pages/Messages'
function App() {

  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/userdetails" element={<Userfrom/>}/> 
        <Route path="/admin" element={<Admin/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Signin/>}/>
        <Route path='/aboutus' element={<About/>}/> 
        <Route path='/profile' element={<Profileu/>}/>
        <Route path='/adminlog' element={<Adminlog/>}/>
        <Route path='/addproducts' element={<Productadd/>}/>
        <Route path='/messages' element={<Messages/>}/>
       </Routes>
       </BrowserRouter>
    </>
  )
}
export default App

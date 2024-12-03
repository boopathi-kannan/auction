import Home from './pages/Home'
import Navbar from './components/Navbar'
import FinishedCard from './components/FinishedCard'
import UpcomingCard from './components/UpcomingCard'
function App() {

  return (
    <>
       <Navbar/>
       <Home/>
       <FinishedCard/>
       <UpcomingCard/>
    </>
  )
}
export default App

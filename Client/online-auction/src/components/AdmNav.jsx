import Logo from "../assets/online-auction logo.webp"

const AdmNav=()=> {
  return (
    <>
     <nav className="bg-white text-black">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
        <img src={Logo} alt="" className='h-[34px] w-[200px]'/>
        </div>

        {/* Menu toggle for mobile */}
        <button
          className="block md:hidden focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"

            />
          </svg>
        </button>

        {/* Navbar links */}
        <ul
          className={`flex flex-col md:flex-row md:items-center absolute md:static bg-white-600 md:bg-transparent w-full md:w-auto top-14 md:top-0 left-0 transition-transform duration-300`}
        >
          <li className="py-2 px-4 text-center hover:bg-blue-700 md:hover:bg-transparent">
            <a href="#" className="block font-bold text-xl">
              Home
            </a>
          </li>
          <li className="py-2 px-4 text-center hover:bg-blue-700 md:hover:bg-transparent">
            <a href="#" className="block font-bold text-xl">
              Message
            </a>
          </li>
          <li className="py-2 px-4 text-center hover:bg-blue-700 md:hover:bg-transparent">
            <a href="#" className="block font-bold text-xl">
              Add products
            </a>
          </li>
          <li className="py-2 px-4 text-center hover:bg-blue-700 md:hover:bg-transparent">
            <a href="#" className="block font-bold text-xl">
              Current Auction
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
    </>
  )
}

export default AdmNav
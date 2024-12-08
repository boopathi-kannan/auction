
export const Auctionpage=()=> {
  return (
     <>
    
     <div className="flex flex-row w-full bg-amber-400">
      <div className="w-2/6 p-8">
        <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1733658826/mouse_szvbdm.jpg"/>
      </div>
      <div className="w-4/6 flex flex-col justify-start pl-10 p-5">
      <h1 className="font-bold text-2xl pt-8">Gaming Mouse</h1>
      <p className="font-light text-lg ">Price: 1000</p>
      <h1 className="font-bold text-2xl ">Specifications:</h1>
      <p className="font-light text-lg">6 Function Button,Rgb,Optical Sensor,PUsh to Talk.</p>
      <h1 className="font-bold text-2xl ">Auction Details:</h1>
      <p className="font-light text-lg">Auction Starting Price:950</p>
      <p className="font-light text-lg">Auction Going</p>
      <form>
        <label className="font-bold text-2xl pr-3">Max Bid by:</label>
        <input className="p-2 border-none" />
      </form>
      <p className="font-bold text-2xl ">Enter your Bid Prize</p>
      <br/>
      <input className="p-2 w-36"/>
      <div className="pt-5 ">
      <button className="bg-black text-white p-3 rounded-xl w-48">Bid</button>
      </div>
      </div>

          
     </div>
     </>
    
  )
}

export default Auctionpage
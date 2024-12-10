import FinishedCard from "./FinishedCard"

const Adminh=()=> {
  return (
    <>
    <div className="bg-slate-200 pt-5">
    <div className='w-full flex justify-start mt-10 mb-10 pl-10'>
      <p className='font-light text-4xl text-gray-400'>
        <span className='font-bold text-black'>Finished </span> Auctions
      </p>
    </div>
  <div className='flex overflow-x-auto'>
  {[...Array(10)].map((_, index) => (
    <FinishedCard key={index} />
  ))}
 </div>
 </div>
 </>
  )
}

export default Adminh

const Productadd=()=> {
  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center pt-10">
    <div className="w-[400px] h-auto border border-black rounded-md p-5 align-middle">
    <form className="max-w-sm mx-auto border-solid border-spacing-2 border-black">
      <h1 className="text-center pt-3 font-bold text-black">Add Product</h1>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
    <input type="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" required />
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Details</label>
    <input type="email" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"  required />
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Original Price</label>
    <input type="email" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" required />
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Auction Price</label>
    <input type="email" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"  required />
  </div>
  <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value="date"
            
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value="time"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
  
   <div className="flex items-start mb-5 pt-4">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product image</label>
    <div className="mb-4">
          <label
            htmlFor="imageUpload"
            className="block text-gray-700 font-medium mb-2"
          >
            Select an Image
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

   </div>
  <button type="submit" className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black ">Submit</button>
</form>
</div>
</div>
    </>
  )
}

export default Productadd
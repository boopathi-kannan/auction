

const Userfrom =()=> {
  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center">
    <div className="w-[400px] h-auto border border-black rounded-md p-5 align-middle">
    <form className="max-w-sm mx-auto border-solid border-spacing-2 border-black">
      <h1 className="text-center pt-3 font-bold text-black">Details Form</h1>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input type="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="John" required />
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
    <input type="email" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="boopathi@gmail.com" required />
  </div>
  <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1234567890"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-blue-500"
            required
          />
  <div className="flex items-start mb-5 pt-4">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
    <div className="flex items-center h-5 m-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-amber-500 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
    </div>
    <div className="flex items-center h-5 m-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-amber-500 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
    </div>
    
  </div>
   <div className="flex items-start mb-5 pt-4">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Image</label>
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

export default Userfrom
import axios from "axios"
import {useRef, useState} from 'react';
const Contact=()=>{
    const emailRef=useRef(null);
    const subjectRef=useRef(null);
    const messageRef=useRef(null);
    const[ mes,setmes]=useState(false);
    const handleSend=async(e)=>{
         e.preventDefault();
       try {
            const res=await axios.post('https://auction-1-853o.onrender.com/api/v4/sendForm',{
                Email:emailRef.current.value,
                Subject:subjectRef.current.value,
                Message:messageRef.current.value,
            })
            if(res.status==201)
            {
                setmes(true);
                emailRef.current.value=null;
                subjectRef.current.value=null;
                messageRef.current.value=null;
            }
            alert(res.status);
       } catch (error) {
           alert("error in sending message!");
       }
    }
  return (
    <>
        <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input ref={emailRef} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input ref={subjectRef} type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea ref={messageRef} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          {mes?(<div className="w-full flex justify-center text-green-400 font-bold"> Thanks for contacting us🙏, our support team will contact you in next few working hours!⏳  @support.auction</div>):(null)}
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white bg-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSend}>Send message</button>
      </form>
  </div>
</section>
    </>
  )
}

export default Contact
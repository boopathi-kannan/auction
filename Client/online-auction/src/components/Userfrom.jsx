import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { StoreData, GetData,SetLogin } from '../Store/store';
import {Navbar} from './Navbar'
export const Userform = () => {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const genderRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      Name: nameRef.current.value,
      Email: emailRef.current.value,
      Phone: phoneRef.current.value,
      Gender: genderRef.current.value,
    };
    try {
      const response = await axios.post('https://auction-1-853o.onrender.com/api/v2/addData', formData, {
    });
    console.log(response.status);
    if (response.status==200) {
      SetLogin(true);
      navigate('/'); 
      return;
    }
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
    <Navbar/>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-[400px] h-auto border border-black rounded-md p-5 align-middle">
          <form className="max-w-sm mx-auto border-solid border-spacing-2 border-black" onSubmit={handleSubmit}>
            <h1 className="text-center pt-3 font-bold text-black">Details Form</h1>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
              <input ref={nameRef} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
              <input ref={emailRef} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="boopathi@gmail.com" required />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
              <input ref={phoneRef} type="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="+1234567890" required />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
              <select ref={genderRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">Profile Image</label>
              <input type="file" accept="image/*" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none" />
            </div>
            <button type="submit" className="text-white bg-black hover:bg-black font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Userform;

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';


const Chatgpt = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState();
  const location = useLocation();
  const email = location.state.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    const toastId = toast.loading('Loading...');

    axios
      .post("https://aichatbot-iecb.onrender.com/user/chat", { prompt, email })
      .then((res) => {
        console.log(res.data.data.text);
        setResponse(res.data.data.text);
        toast.dismiss(toastId);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error in chatbot');
        toast.dismiss(toastId);
      });
  }


  return (
    <div className='bg-[#040C18] h-[100vh] flex justify-center items-center'>
      <form className='space-y-3 flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <label className='text-[#fff]'>
          Ask me anything??
        </label>
        <div>
          <textarea
            type='text'
            cols={30}
            rows={10}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <div className='rounded-md bg-yellow-400 p-4 w-72 text-center flex flex-col justify-center items-center' >
          <p className='w-64'>{response ? response : "Output will display here   "} </p>
        </div>
        <div className='flex justify-center items-center'>
          <button className='mt-10 text-[#fff] bg-[#ff4820] font-[500] py-2 px-5 font-serif rounded' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Chatgpt

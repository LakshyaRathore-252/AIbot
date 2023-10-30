import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Chatgpt from './Chatgpt';
import toast from 'react-hot-toast';
const Form = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState(' ');
    const [mobile, setMob] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const toastId = toast.loading('Loading...');

        axios
            .post("https://aichatbot-iecb.onrender.com/user/userData", { name, email, mobile })
            .then((res) => {
                console.log(res.data);
                toast.dismiss(toastId);
                toast.success("Data stored");
                navigate('/chat', { state: { email } });
            })
            .catch((err) => {
                console.log(err.response.data); // Log the server error message
                toast.dismiss(toastId);
                toast.error("Error while stroing data");
            });
    }


    return (
        <div className='bg-[#040C18] h-[100vh] flex justify-center items-center'>

            <form className='space-y-4 flex flex-col justify-center items-center ' onSubmit={handleSubmit}>

                <div className='space-x-1'>
                    <label className='text-[#fff]'>
                        Email :
                    </label>

                    <input
                        type='email'
                        name='email'
                        className='outline-2 border-2 border-red-950'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='space-x-1'>
                    <label className='text-[#fff]'>
                        Name :
                    </label>

                    <input
                        type='text'
                        name='name'
                        className='outline-2 border-2 border-red-950'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='space-x-1'>
                    <label className='text-[#fff]'>
                        Mobile No:
                    </label>

                    <input
                        type='text'
                        name='mobileno.'
                        required
                        min={0}
                        max={9}
                        className='outline-2 border-2 border-red-950'
                        onChange={(e) => setMob(e.target.value)}
                    />
                </div>

                <div>
                    <button type="submit" className='mt-10 text-[#fff] bg-[#ff4820] font-[500] py-2 px-5 font-serif rounded'>
                        Update
                    </button>
                </div>
            </form >

        </div >
    )
}

export default Form

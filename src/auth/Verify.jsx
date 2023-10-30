import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const toastId = toast.loading('Loading...');

        if (password === '123') {
            console.log("Shii hai")
            console.log(password)
            toast.dismiss(toastId)
            toast.success("Welcome to admin Page")
            navigate('/admin')

        }
        else {
            console.log("Invalid password")
            console.log(password)
            toast.dismiss(toastId)
            toast.error("Enter Valid Password")

        }
    }

    return (
        <div className=' bg-black flex flex-col justify-center items-center  h-[100vh]'>

            <form onSubmit={handleSubmit} className='space-x-2 rounded-md bg-slate-500 h-[5rem] flex items-center px-2 py-3'>
                <label className='text-white'>
                    Enter the Admin passowrd:
                </label>
                <input
                    type='passowrd'
                    onChange={(e) => setPassword(e.target.value)}
                />

            </form>
            <button type='submit' className='mt-5 bg-[#FF4820] p-2  '>
                Submit
            </button>
        </div>
    )
}

export default Verify
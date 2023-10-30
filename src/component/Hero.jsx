import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='bg-[#040C18] h-[100vh]'>

            <div className='text-center   flex justify-center items-center'>
                <p className='text-[#81afdd] text-xl mt-20 w-[800px]'>
                    Meet Your New AI Assistant
                </p>
            </div>

            <div className='flex md:flex-row flex-col justify-center items-center text-2xl text-[#AE67FA] text-center font-serif  mt-[150px]'>
                Get Started With our  <span className='ml-2 bg-blue-500 py-2 px-5 rounded text-white'>   Chatbot</span>


            </div >


            <div className='text-center mt-10'>

                <Link className='mt-10 text-[#fff] bg-[#ff4820] font-[500] py-2 px-5 font-serif rounded' to='/form'> Start</Link>
            </div>


        </div>
    )
}

export default Hero
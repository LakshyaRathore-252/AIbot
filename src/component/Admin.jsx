import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Admin = () => {

  const [response, setResponse] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const toastId = toast.loading('Loading...');
    try {
      const res = await axios.get("http://localhost:5000/user/getChatData");
      console.log(res.data.chatusers);
      setResponse(res.data.chatusers); // Store the users data into response
      toast.dismiss(toastId);
    } catch (err) {
      console.log(err);
      toast.error('Error fetching data');
      toast.dismiss(toastId);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    console.log(response);
  }, [response]);

  const filteredResponse = response.filter((item) =>
    item.chats.some(chat => chat.prompt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className='bg-black text-white min-h-screen  space-y-5'>
      <div className='text-2xl text-center flex justify-center items-center  '>
        <h1 className='mt-4'>Welcome to the Admin Panel</h1>
      </div>

      <div className='flex justify-center items-center'>
        <input
          type="text"
          placeholder="Search based on prompt..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className='placeholder:text-black text-black p-2'

        />
      </div>

      <div className=' flex justify-center items-center '>
        <div className='flex flex-col justify-center  items-center space-y-14 w-[80%] '>

          {filteredResponse.length > 0 ? filteredResponse.map((item, index) => (
            <div className='flex flex-col  rounded-md bg-[#161D29] p-4 w-full' key={index}>
              {console.log(item.name)}
              <h1>Name: {item.name}</h1>
              <p>Email :{item.email}</p>

              <p>Mobile : {item.mobile}</p>

              {
                item.chats.map((r, i) => (
                  <div key={i} className='space-y-3'>
                    <p className='mt-3 text-[#D2CCC3]'>Enter Prompt : {r.prompt} </p>

                    <p className=' text-[#D2CCC3] w-full'>{r.res} </p>
                    <p>Asked On :{r.askedON ? moment(r.askedON).format('MMMM Do YYYY, h:mm:ss a') : " No Data Found"}</p>
                  </div>
                ))
              }
            </div>
          )) : (<div className='text-white flex justify-center text-2xl items-center h-screen'>No Data Found </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Admin;

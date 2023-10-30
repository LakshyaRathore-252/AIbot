import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../src/component/Navbar'
import Form from '../src/component/Form'
import Hero from './component/Hero';
import Admin from './component/Admin';
import Chatgpt from '../src/component/Chatgpt';
import Verify from './auth/Verify';
const AllRoute = () => {
    return (


        <Routes>

            <Route
                path="/"
                element={<Hero />}
            />

            <Route
                path="/form"
                element={<Form />}
            />

            <Route
                path='/admin'
                element={<Admin />}
            />

            <Route
                path='/auth'
                element={<Verify />}
            />
            <Route
                path='/chat'
                element={<Chatgpt />}
            />

        </Routes>


    )
}

export default AllRoute
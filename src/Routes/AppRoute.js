import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/UI/Navbar';
import Bookingform from '../Pages/Bookingform';
import Event from '../Pages/Event';
import User from '../Pages/User';




const AppRoutes = () => {
    return (
        <div>
               
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='bookingform' element={<Bookingform></Bookingform>}></Route>
                    <Route path='Event' element={<Event></Event>}></Route>
                    <Route path='user' element={<User/>}></Route>



                   
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;
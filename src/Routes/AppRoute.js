import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/UI/Navbar';
import Bookingform from '../Pages/Bookingform';
import Master from '../Pages/Master';




const AppRoutes = () => {
    return (
        <div>
               
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='bookingform' element={<Bookingform></Bookingform>}></Route>
                    <Route path='master' element={<Master/>}></Route>

                   
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;
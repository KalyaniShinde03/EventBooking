import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/UI/Navbar';
import Bookingform from '../Pages/Bookingform';




const AppRoutes = () => {
    return (
        <div>
               
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='bookingform' element={<Bookingform></Bookingform>}></Route>

                   
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;
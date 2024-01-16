import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/UI/Navbar';
import Bookingform from '../Pages/Bookingform';
import Event from '../Pages/Event';




const AppRoutes = () => {
    return (
        <div>
               
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='bookingform' element={<Bookingform></Bookingform>}></Route>
                    <Route path='Event' element={<Event></Event>}></Route>

                   
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Booking = () => {
    let [eventbookingList, seteventBookingList] = useState([]);
    let [isLoader, setIsLoader] = useState(true);



    useEffect(() => {
        getAllBookingList();
    }, [])

    const getAllBookingList = async () => {
        const result = await axios.get('https://freeapi.miniprojectideas.com/api/EventBooking/GetAllEventBooking')

        setIsLoader(false);
        seteventBookingList(result.data.data);


    }
    return (
        <div >
            <div className='row container-fluid justify-content-center'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            <div className='row'>
                                <div className='col-6'> Event Booking List</div>
                                <div className='col-6 text-end'>
                            <button className='btn btn-primary btn-sm'>Booking-Form</button>

                                </div>
                            </div>
                            

                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr No</th>
                                        <th>Event Name</th>
                                        <th>Start Date</th>
                                        <th> Customer Name</th>
                                        <th>Customer Mobile</th>
                                        <th>No. of tickets</th>
                                        {/* <th>Action</th> */}
                                    </tr>

                                </thead>
                                {
                                    isLoader && <tbody>
                                        <tr>
                                            <td colSpan={9} className='text-center'>
                                                <div class="spinner-border text-muted"></div>
                                                <div class="spinner-border text-primary"></div>
                                                <div class="spinner-border text-success"></div>
                                                <div class="spinner-border text-info"></div>
                                                <div class="spinner-border text-warning"></div>
                                                <div class="spinner-border text-danger"></div>
                                                <div class="spinner-border text-secondary"></div>
                                                <div class="spinner-border text-dark"></div>
                                                <div class="spinner-border text-light"></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                }
                                {
                                    !isLoader && <tbody>
                                        {
                                            eventbookingList.map((item, index) => {
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{item.eventName}</td>
                                                        <td>{item.startDate}</td>

                                                        <td>{item.customerName}</td>
                                                        <td>{item.customerMobile}</td>
                                                        <td>{item.noOfTickets}</td>
                                                        {/* <td> */}
                                                        {/* <button className='btn btn-info btn-sm' onClick={()=>ediClientPackage(item.clientPackageId)}>Edit</button> */}
                                                        {/* <button className='btn btn-danger btn-sm'onClick={()=>deleteClientPackage(item.clientPackageId)}>Delete</button> */}

                                                        {/* </td> */}
                                                    </tr>
                                                )

                                            })
                                        }
                                    </tbody>
                                }

                            </table>

                        </div>

                    </div>

                </div>








            </div>
        </div>
    )
};

export default Booking;
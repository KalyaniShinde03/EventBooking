import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { showBookingList, addBooking, updateBooking, editBooking, deleteBooking, showUserList, showEventList } from '../Services/Api'

const Bookingform = () => {

    let [isNewView, setisNewView] = useState(false);

    let [eventBookingList, seteventBookingList] = useState([]);
    let [isLoader, setIsLoader] = useState(true);

    let [userData, setUserData] = useState([]);
    let [allEvent, setAllEvent] = useState([]);

    const changeView = () => {
        setisNewView(!isNewView)
    }




    const getAllUserData = () => {
        showUserList().then((data) => {
            setUserData(data);
        })
    }

    const getAllEvents = () => {
        showUserList().then((data) => {
            setAllEvent(data);

        })



    }

    const getAllBookingList = () => {
        showBookingList().then((data) => {
            seteventBookingList(data)
            setIsLoader(false)
        })

       
    }



    useEffect(() => {
        getAllUserData();
        getAllEvents();
        getAllBookingList();
    }, [])

    let [bookingObj, setBookingObj] = useState({
        "bookingId": 0,
        "userId": 0,
        "eventId": 0,
        "noOfTickets": '',
        "eventBookingMembers": []
    });

    let [bookingMemberobj, setbookingMemberobj] = useState(
        {
            "bookingMemberId": 0,
            "bookingId": 0,
            "name": "",
            "age": '',
            "identityCard": "",
            "cardNo": "",
            "contactNo": ""
        }
    );

    const onSaveBooking = async () => {
        addBooking(bookingObj).then((data) => {
            if (data.result) {

                alert('Booking successfully')
                getAllBookingList();
            } else {
                alert(data.message)
            }


        })

    }

    const onUpdateBooking = async () => {
        updateBooking(bookingObj).then((data) => {
            if (data.result) {

                alert('update successfully')
                getAllBookingList();
            } else {
                alert(data.message)
            }

        })

    }

    const changeBookingForm = (event, key) => {
        setBookingObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    };

    const changeBookingMemberForm = (event, key) => {
        setbookingMemberobj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    };

    const AddBookingMember = () => {
        setBookingObj(prevObj => ({ ...prevObj, eventBookingMembers: [...prevObj.eventBookingMembers, bookingMemberobj] }))
    };

    const onReset = () => {
        setBookingObj({
            "bookingId": 0,
            "userId": 0,
            "eventId": 0,
            "noOfTickets": '',
            "eventBookingMembers": []
        })

        setbookingMemberobj(
            {
                "bookingMemberId": 0,
                "bookingId": 0,
                "name": "",
                "age": '',
                "identityCard": "",
                "cardNo": "",
                "contactNo": ""
            }

        )
    }

    const onEditBooking = (bookingId) => {

        editBooking(bookingId).then((data) => {
            setBookingObj(data)

            changeView();
        })

    }


    const onDeleteBooking = (bookingId) => {
        deleteBooking(bookingId).then((data) => {
            const isDelete = window.confirm('Are you sure want to delete')
            if (isDelete) {

                if (data) {

                    alert('Booking deleted successfully')
                    getAllBookingList();

                } else {
                    alert(data.message)
                }

            }
        })

    }





    return (
        <div className='container-fluid  mt-2'>
            {
                isNewView && <div className='row '>

                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header bg-warning'>
                                <div className='row'>
                                    <div className='col-6'>Booking Form</div>
                                    <div className='col-6 text-end'>
                                        <button className='btn btn-primary btn-sm' onClick={changeView}>Booking-List</button>

                                    </div>
                                </div>

                            </div>
                            <div className='card-body'>
                                <div className='row mt-2'>
                                    <div className='col-6'>
                                        <div className='row '>
                                            <div className='col-6'>
                                                <label>Select User</label>
                                                <select className='form-select' value={bookingObj.userId} onChange={(e) => changeBookingForm(e, 'userId')} >
                                                    <option value=''>Select User</option>
                                                    {
                                                        userData.map((item) => {
                                                            return (<option value={item.userId}>{item.name}</option>)
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className='col-6'>
                                                <label>Select Event</label>
                                                <select className='form-select' value={bookingObj.eventId} onChange={(e) => changeBookingForm(e, 'eventId')} >
                                                    <option value=''>Select Event</option>
                                                    {
                                                        allEvent.map((item) => {
                                                            return (<option value={item.eventId}>{item.eventName}</option>)
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row mt-2'>
                                            <div className='col-6 '>
                                                <label>No. of Tickets</label>
                                                <input className='form-control' value={bookingObj.noOfTickets} onChange={(e) => changeBookingForm(e, 'noOfTickets')}></input>

                                            </div>
                                        </div>
                                        <div className='row mt-2'>
                                            <div className='col-2'>
                                                {bookingObj.bookingId == 0 && <button className='btn btn-success btn-sm' onClick={onSaveBooking}>Save</button>}
                                                {bookingObj.bookingId !== 0 && <button className='btn btn-warning btn-sm' onClick={onUpdateBooking}>Update</button>}

                                            </div>
                                            <div className='col-2'>

                                                <button className='btn btn-secondary btn-sm' onClick={onReset}>Reset</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='card '>
                                            <div className='card-body'>
                                                <div className='row'>

                                                    {/* <div className='col-4'>
<label>Booking by event</label>
<select className='form-select' value={bookingObj.BookingId} onChange={(e) => changeBookingForm(e, 'BookingId')} placeholder='Select'>

<option value=''></option>
{
bookingByEvent.map((item) => {
return (<option value={item.bookingId}>{item.name}</option>)
})
}
</select>
</div> */}
                                                    <div className='col-4'>
                                                        <label>Name</label>
                                                        <input type='text' className='form-control' value={bookingMemberobj.name} onChange={(e) => changeBookingMemberForm(e, 'name')} />
                                                    </div>
                                                    <div className='col-4'>
                                                        <label>Age</label>
                                                        <input type='text' className='form-control' value={bookingMemberobj.age} onChange={(e) => changeBookingMemberForm(e, 'age')} />
                                                    </div>
                                                </div>
                                                <div className='row mt-2'>

                                                    <div className='col-3'>
                                                        <label>Identity Card</label>
                                                        <input type='text' className='form-control' value={bookingMemberobj.identityCard} onChange={(e) => changeBookingMemberForm(e, 'identityCard')} />

                                                    </div>
                                                    <div className='col-3'>
                                                        <label>Card No</label>
                                                        <input type='text' className='form-control' value={bookingMemberobj.cardNo} onChange={(e) => changeBookingMemberForm(e, 'cardNo')} />
                                                    </div>
                                                    <div className='col-3'>
                                                        <label>Contact No</label>
                                                        <input type='text' className='form-control' value={bookingMemberobj.contactNo} onChange={(e) => changeBookingMemberForm(e, 'contactNo')} />
                                                    </div>
                                                    <div className='col mt-4'>
                                                        <button className='btn btn-primary btn-sm' onClick={AddBookingMember}> Add</button>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className='container-fluid'>
                                                <table className='table table-bordered '>
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Age</th>
                                                            <th>IdentityCard</th>
                                                            <th>CardNo</th>
                                                            <th>ContactNo</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            bookingObj.eventBookingMembers.map((item) => {
                                                                return (
                                                                    <tr>


                                                                        <td>{item.name}</td>
                                                                        <td>{item.age}</td>
                                                                        <td>{item.identityCard}</td>
                                                                        <td>{item.cardNo}</td>
                                                                        <td>{item.contactNo}</td>

                                                                    </tr>

                                                                )
                                                            })
                                                        }

                                                    </tbody>

                                                </table>
                                            </div>









                                        </div>
                                    </div>
                                </div>

                            </div>





                        </div>
                    </div>







                </div>
            }
            {
                !isNewView && <div className='row  '>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header bg-warning'>
                                <div className='row'>
                                    <div className='col-6'> Event Booking List</div>
                                    <div className='col-6 text-end'>
                                        <button className='btn btn-primary btn-sm' onClick={changeView}>Booking-Form</button>

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
                                            <th>Edit</th>
                                            <th>Delete</th>
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
                                                eventBookingList.map((item, index) => {
                                                    return (<tr>
                                                        <td>{index + 1}</td>
                                                        <td>{item.eventName}</td>
                                                        <td>{item.startDate}</td>
                                                        <td>{item.customerName}</td>
                                                        <td>{item.customerMobile}</td>
                                                        <td>{item.noOfTickets}</td>
                                                        <td>
                                                            <button className='btn btn-info btn-sm' onClick={() => onEditBooking(item.bookingId)}>Edit</button>&nbsp;
                                                        </td>
                                                        <td>
                                                            <button className='btn btn-danger btn-sm' onClick={() => onDeleteBooking(item.bookingId)}>Delete</button>

                                                        </td>
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
            }



        </div>
    );
};

export default Bookingform;
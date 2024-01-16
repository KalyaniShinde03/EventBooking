import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Event = () => {
    let [Events, setEvents] = useState([]);

    let [EventObj, setEventObj] = useState({

        "eventId": 0,
        "eventName": "",
        "description": "",
        "location": "",
        "startDate": "",
        "startTime": "",
        "endDate": "",
        "endTime": "",
        "imageUrl": "",
        "capacity": "",
        "price": 0,
        "organizerId": 0,
        "isIdentityMandatory": true,
        "isCoupleEntryMandatory": true


    })




    useEffect(() => {
        getAllEvents();


    }, [])

    const getAllEvents = async () => {
        const result = await axios.get('https://freeapi.miniprojectideas.com/api/EventBooking/GetAllEvents')
        setEvents(result.data.data)
    }






    const AddEvents = async () => {
        debugger;
        const result = await axios.post("https://freeapi.miniprojectideas.com/api/EventBooking/CreateEvent", EventObj)
        if (result.data.result) {
            alert("Addevent created succefully")
            getAllEvents();

        } else {
            alert(result.data.message)
        }

    }
    const changeformvalue = (event, key) => {
        setEventObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }
    const changeIsIdentityMandatory = (event) => {
        setEventObj(prevObj => ({ ...prevObj, IsIdentityMandatory: event.target.checked }))
    }
    const changeIsCoupleEntryMandatory = (event) => {
        setEventObj(prevObj => ({ ...prevObj, IsCoupleEntryMandatory: event.target.checked }))
    }


    const onEdit = async (id) => {
        try {
            const result = await axios.get('https://freeapi.miniprojectideas.com/api/EventBooking/GetEventById?id=' + id);
            if (result.data.result) {
                setEventObj(result.data.data)
            }
            else {
                alert(result.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const onDelete = async (eventId) => {
        const isDelete = window.confirm('Are You Sure Want To Delete');
        if (isDelete) {
            const result = await axios.get('https://freeapi.miniprojectideas.com/api/EventBooking/DeleteEventById?id=' + eventId);
            if (result.data) {
                alert('Event Deleted');
                getAllEvents();
            } else {
                alert(result.data.message)
            }
        }
    }
    const UpdateEvent = async () => {
        const result = await axios.post('https://freeapi.miniprojectideas.com/api/EventBooking/UpdateEvent', EventObj)
        if (result.data.result) {
            alert('Event Updated Succuessfully')
            getAllEvents();
        } else {
            alert(result.data.message)
        }

    }

    const OnResetEvent=()=>{
        setEventObj({
        "eventId": 0,
        "eventName": "",
        "description": "",
        "location": "",
        "startDate": "",
        "startTime": "",
        "endDate": "",
        "endTime": "",
        "imageUrl": "",
        "capacity": "",
        "price": 0,
        "organizerId": 0,
        "isIdentityMandatory": true,
        "isCoupleEntryMandatory": true
        })
    }
    return (
        <div>
            <div className='container-fluid mt-2'>
                <div className='row'>
                <div className='col-4'>
                        <div className='card'>
                            <div className='card-header  bg-warning'>
                                Add Event
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <label>EventName</label>
                                        <input type='text' className='form-control' value={EventObj.eventName} onChange={(event) => changeformvalue(event, 'eventName')} ></input>
                                    </div>
                                    <div className='col-4'>
                                        <label >Description</label>
                                        <input type='text' className='form-control' value={EventObj.description} onChange={(event) => changeformvalue(event, 'description')}></input>

                                    </div>
                                    <div className='col-4'>
                                        <label>Location</label>
                                        <input type='text' className='form-control' value={EventObj.location} onChange={(event) => changeformvalue(event, 'location')}></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-4 pt-2'>
                                        <label>StartDate</label>
                                        <input type='date' className='form-control' value={EventObj.startDate} onChange={(event) => changeformvalue(event, 'startDate')}></input>
                                    </div>
                                    <div className='col-4 pt-2'>
                                        <label>StartTime</label>
                                        <input type='time' className='form-control' value={EventObj.startTime} onChange={(event) => changeformvalue(event, 'startTime')} ></input>
                                    </div>
                                    <div className='col-4 pt-2'>
                                        <label>EndDate</label>
                                        <input type='Date' className='form-control' value={EventObj.endDate} onChange={(event) => changeformvalue(event, 'endDate')}></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-4 '>
                                        <label>EndTime</label>
                                        <input type='time' className='form-control' value={EventObj.endTime} onChange={(event) => changeformvalue(event, 'endTime')}></input>
                                    </div>

                                    <div className='col-8'>
                                        <label>ImageUrl</label>
                                        <input type='text' className='form-control' value={EventObj.imageUrl} onChange={(event) => changeformvalue(event, 'imageUrl')}></input>

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-4'>
                                        <label>Capacity</label>
                                        <input type='number' className='form-control' value={EventObj.capacity} onChange={(event) => changeformvalue(event, 'capacity')}></input>
                                    </div>
                                    <div className='col-4'>
                                        <label>Price</label>
                                        <input type='text' className='form-control' value={EventObj.price} onChange={(event) => changeformvalue(event, 'price')}></input>
                                    </div>
                                    <div className='col-4 '>
                                        <label>Select Organizer</label>
                                        <input type='text' className='form-control' value={EventObj.organizerId} onChange={(event) => changeformvalue(event, 'organizerId')}></input>

                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6 pt-2'>
                                        <input type='checkbox' value={EventObj.isIdentityMandatory} onChange={(event) => changeIsIdentityMandatory(event, 'isIdentityMandatory')}></input>
                                        <label>IsIdentityMandatory</label>
                                    </div>
                                    <div className='col-6 pt-2'>
                                        <input type='checkbox' value={EventObj.isCoupleEntryMandatory} onChange={(event) => changeIsCoupleEntryMandatory(event, 'isCoupleEntryMandatory')}></input>
                                        <label>IsCoupleEntryMandatory</label>

                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-2'>
                                        {
                                           EventObj.eventId == 0 && <button className='btn btn-success' onClick={AddEvents} >Save</button>
                                        }
                                        {
                                           EventObj.eventId !== 0 && <button className='btn btn-warning' onClick={UpdateEvent}>Update</button>
                                        }&nbsp;

                                    </div>
                                    <div className='col-2 '>
                                    <button className='btn btn-secondary' onClick={OnResetEvent} >Reset</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className='card'>
                            <div className=' card-header bg-warning'>
                               Event Form
                            </div>
                            <div className='card-body'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>sr</th>
                                            <th>eventName</th>
                                            {/* <th>startDate</th>
                                            
                                            <th>endDate</th> */}
                                            <th>organizerName</th>
                                            
                                            <th>price</th>
                                            <th>location</th>
                                            <th>Edit</th>
                                            <th>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Events.map((item, index) => {
                                                return <tr>

                                                    <td>{index + 1}</td>
                                                    <td>{item.eventName}</td>
                                                    {/* <td>{item.startDate}</td>
                                                   
                                                    <td>{item.endDate}</td> */}
                                                    <td>{item.organizerName}</td>
                                                   
                                                    <td>{item.price}</td>
                                                    <td>{item.location}</td>
                                                    <td>
                                                        <button className='btn btn-info btn-sm' onClick={(e) => { onEdit(item.eventId) }}>Edit</button>
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-danger  btn-sm' onClick={(e) => { onDelete(item.eventId) }}>delete</button>
                                                    </td>
                                                </tr>
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
    );
};

export default Event;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ongetAlluser, onAddUser, onEditUser, onDeleteUser, onUpdateUser } from '../Services/Api';


const User = () => {
    let [UserList, setUserList] = useState([]);

    let [UserObj, setUserObj] = useState(
        {
            "userId": 0,
            "name": "",
            "email": "",
            "password": "",
            "contactNo": "",
            "role": ""
        }
    )

    const changeFormValue = (event, key) => {
        setUserObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }

    useEffect(() => {
        getAlluser();
    },[])


    const getAlluser = () => {
        ongetAlluser().then((data) => {
            setUserList(data);
        })
    }


    const AddUser = () => {
        onAddUser(UserObj).then((data) => {
            if (data.result) {
                alert('User Data Created Successfully');
                getAlluser();
            }
            else {
                alert(data.message)
            }
        }

        )

    }

    const DeleteUser = (userId) => {
        onDeleteUser(userId).then((data) => {
            const isDelete = window.confirm('Are you sure want to delete')
            if (isDelete) {

                if (data.result) {
                    alert('User Deleted Successfully');
                    getAlluser();
                }
                else {
                    alert(data.message)
                }
            }
        })

    }


    const EditUser = (userId) => {

        onEditUser(userId).then((data) => {
            setUserObj(data);


        })

    }




    const onRest = () => {
        setUserObj({
            "userId": 0,
            "name": "",
            "email": "",
            "password": "",
            "contactNo": "",
            "role": ""
        })
    }

    const UpdateUser = () => {
        onUpdateUser(UserObj).then((data) => {
            if (data.result) {

                alert('update successfully')
                getAlluser();
            } else {
                alert(data.message)
            }

        })

    }


    return (
        <div className='container-fluid mt-2'>
            <div className='row '>
                <div className='col-4'>
                    <div className='card'>
                        <div className='card-header bg-warning'>
                            User Form
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <label>Name</label>
                                <input type='text' className='form-control' value={UserObj.name} onChange={(e) => changeFormValue(e, 'name')} />

                            </div>
                            <div className='col-6'>
                                <label>Email </label>
                                <input type='text' className='form-control' value={UserObj.email} onChange={(e) => changeFormValue(e, 'email')} />

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <label>Password</label>
                                <input type='text' className='form-control' value={UserObj.password} onChange={(e) => changeFormValue(e, 'password')} />

                            </div>
                            <div className='col-6'>
                                <label>Contact No </label>
                                <input type='text' className='form-control' value={UserObj.contactNo} onChange={(e) => changeFormValue(e, 'contactNo')} />

                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-3 '>
                                {UserObj.userId == 0 && <button className='btn btn-success btn-sm' onClick={AddUser} >Save</button>}
                                {UserObj.userId !== 0 && <button className='btn btn-warning btn-sm' onClick={UpdateUser} >Update</button>}

                            </div>
                            <div className='col-2 mb-2'>
                                <button className='btn btn-secondary btn-sm' onClick={onRest} >Reset</button>

                            </div>
                        </div>
                    </div>
                </div>


                <div className='col-8'>
                    <div className='card'>
                        <div className='card-header bg-warning'>

                            User List

                        </div>
                        <div className='card-body'>
                        <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        
                                        <th>contact No</th>
                                        <th>Edit</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        UserList.map((item, index) => {
                                            return (<tr>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                               
                                                <td>{item.contactNo}</td>
                                                <td>
                                                    <button className='btn btn-info btn-sm' onClick={() => EditUser(item.userId)}>Edit</button>
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger btn-sm' onClick={() => DeleteUser(item.userId)}>Delete</button>
                                                </td>

                                            </tr>)
                                        })
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default User;
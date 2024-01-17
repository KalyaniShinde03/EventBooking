import axios from 'axios';
import * as Constant from "./Constant";
const ApiUrl = process.env.REACT_APP_API_KEY;

const showBookingList = async () => {
    const result = await axios.get(ApiUrl + Constant.GET_ALL_BOOKING);
    return result.data.data
}

const addBooking = async (obj) => {
    const result = await axios.post(ApiUrl + Constant.ADD_BOOKING, obj);
    return result.data
}

const updateBooking = async (obj) => {
    const result = await axios.post(ApiUrl + Constant.UPDATE_BOOKING, obj);
    return result.data
}

const editBooking = async (id) => {
    const result = await axios.get(ApiUrl + Constant.EDIT_BOOKING + id);
    return result.data.data
}

const deleteBooking = async (id) => {
    const result = await axios.get(ApiUrl + Constant.DELETE_BOOKING + id);
    return result.data
}

const showUserList = async () => {
    const result = await axios.get(ApiUrl + Constant.GET_ALL_USER);
    return result.data.data
}

const showEventList = async () => {
    const result = await axios.get(ApiUrl + Constant.GET_ALL_EVENT);
    return result.data.data
}
const getEventlist = async () => {
    const result = await axios.get(ApiUrl + Constant.GET_EVENT);
    return result.data.data
}
const addEvents = async (obj) => {
    const result = await axios.post(ApiUrl + Constant.ADD_EVENTS, obj);
    return result.data
}

const editEvents = async (id) => {
    const result = await axios.get(ApiUrl + Constant.EDIT_EVENTS+ id);
    return result.data.data
}

const deleteEvents = async (id) => {
    const result = await axios.get(ApiUrl + Constant.DELETE_EVENTS + id);
    return result.data
}

const updateEvents = async (obj) => {
    const result = await axios.post(ApiUrl + Constant.UPDATE_EVENTS, obj);
    return result.data
}

const ongetAlluser = async () => {
    const result = await axios.get(ApiUrl + Constant.GET_USER);
    return result.data.data
}


const onAddUser = async (obj) => {
    const result =await axios.post(ApiUrl + Constant.ADD_USER,obj);
    return result.data
}
const onDeleteUser = async (id) => {
    const result = await axios.get(ApiUrl + Constant.DELETE_USER + id);
    return result.data
}
const onEditUser = async (id) => {
    const result = await axios.get(ApiUrl + Constant.EDIT_USER + id);
    return result.data.data
}


const onUpdateUser = async (obj) => {
    const result = await axios.post(ApiUrl + Constant.UPDATE_USER,obj);
    return result.data

}


















export { showBookingList, addBooking, updateBooking, editBooking, deleteBooking, showUserList, showEventList,getEventlist ,addEvents, editEvents,deleteEvents,updateEvents,ongetAlluser,onAddUser,onEditUser,onDeleteUser,onUpdateUser}
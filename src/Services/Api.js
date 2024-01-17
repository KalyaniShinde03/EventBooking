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

















export { showBookingList, addBooking, updateBooking, editBooking, deleteBooking, showUserList, showEventList }
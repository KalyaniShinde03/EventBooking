import axios from 'axios';
import * as Constant from "./Constant";
const ApiUrl = process.env.REACT_APP_API_KEY;

const showBookingList = async () => {
    const result = await axios.get(ApiUrl + Constant.GET_ALL_BOOKING);
    return result.data
}


const getMasterList = async () => {
    const result = await axios.get(ApiUrl + Constant.GET_ALL_MASTER);
    return result.data
}

const addMaster = async (obj) => {
    try {

        const result = await axios.post(ApiUrl + Constant.ADD_MASTER, obj);
        return result.data
    } catch (error) {
        alert(error.code)
    }

}
const updateMaster = async (obj) => {
    try {
        const result = await axios.post(ApiUrl + Constant.UPDATE_MASTER, obj);
        return result.data
    } catch (error) {
    }
}
const onDeleteMaster = async (obj) => {
    const isDelte = window.confirm('Are You Sure want to Delete');
    if (isDelte) {
        const result = await axios.post(ApiUrl + Constant.DELETE_MASTER, obj);
        return result.data
    }
}














export {showBookingList,getMasterList,addMaster,updateMaster,onDeleteMaster}
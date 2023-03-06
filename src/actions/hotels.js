import * as api from '../api';
import { CREATE } from '../constants/actionTypes.js';
export const addHotel = (hotel) => async(dispatch)=>{
    try {
        const {data} = await api.addHotel(hotel);        
        dispatch({type:CREATE,payload:data});
    } catch (error) {
        console.log(error);

    }
}
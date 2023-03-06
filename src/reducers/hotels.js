import {CREATE} from '../constants/actionTypes.js';
const initialState = {
    hotels: []
  };
  
export default  (hotels=initialState,action) =>{
    switch (action.type) {
        case CREATE:
            return [...hotels,action.payload];
    }

}
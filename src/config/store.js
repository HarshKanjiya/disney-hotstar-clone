import { configureStore} from "@reduxjs/toolkit";
import userReducer from './authSlice';

export default configureStore({
    reducer : {
        user: userReducer
    }
})
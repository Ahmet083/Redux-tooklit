import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import useReducer  from "./userSalice"



export default configureStore({
    reducer: {
        auth: authReducer,
        user: useReducer


    },
})
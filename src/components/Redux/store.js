import { configureStore } from "@reduxjs/toolkit";
import StudReducerAcd from "./StudReducerAcd";
import StudReducer from './StudReducer'

const store = configureStore({
    reducer:{
        newStudent:StudReducer,
        newStudentAcd: StudReducerAcd 
    }
})

export default store;


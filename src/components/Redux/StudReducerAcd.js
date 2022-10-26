import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    studentsListAcd: []
}

const StudReducerAcd = createSlice({
    name: "StudReducerAcd",
    initialState,
     reducers:{
         addStudentAcd:(state, action) => {
             state.studentsListAcd.push(action.payload)
         }
     }
})

export const {addStudentAcd} = StudReducerAcd.actions;
export default StudReducerAcd.reducer

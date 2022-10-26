import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentsList: []
}

const StudReducer = createSlice({
    name: "StudReducer",
    initialState,
     reducers:{
         addStudent:(state, action) => {
             state.studentsList.push(action.payload)
         }
     }
})

export const {addStudent} = StudReducer.actions;
export default StudReducer.reducer

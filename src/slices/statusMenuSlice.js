import { createSlice } from "@reduxjs/toolkit";

export const statusMenuSlice = createSlice({
    name: "statusMenu",
    initialState: {
        laboratory: {status: false},
        paraClinic: {status: false},
    },
    reducers: {
        getStatusMenuLaboratory: (state, action) => {
            state.laboratory.status = action.payload.status;
        },
        getStatusMenuParaClinic: (state, action) => {
            state.paraClinic.status = action.payload.status;
        },
    }
})

export const {getStatusMenuLaboratory, getStatusMenuParaClinic} = statusMenuSlice.actions;

export default statusMenuSlice.reducer;
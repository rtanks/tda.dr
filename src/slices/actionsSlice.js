import { createSlice } from "@reduxjs/toolkit";

export const actionsSlice = createSlice({
    name: "actions",
    initialState: {
        medicine: {
            doctor: "incomplete",
            drugstore: "incomplete",
            courier: "incomplete",
            interpretation: "incomplete"
        },
        test: {
            doctor: "incomplete",
            laboratory: "incomplete",
            sample: "incomplete",
            interpretation: "incomplete"
        },
        paraClinic: {
            doctor: "incomplete",
            paraClinic: "incomplete"
        }
    },
    reducers: {
        changeCompleteStatusMedicine: (state, action) => {
            console.log(first)
            state.medicine = {...state.medicine, [action.payload.key]: ((state.medicine[action.payload.key] === "incomplete" )? "complete" : "incomplete")}
        }, 
        changeCompleteStatusTest: (state, action) => {
            state.test = {...state.test, [action.payload.key]: ((state.test[action.payload.key] === "incomplete" )? "complete" : "incomplete")}
        }, 
        changeCompleteStatusParaClinic: (state, action) => {
            state.paraClinic = {...state.paraClinic, [action.payload.key]: ((state.paraClinic[action.payload.key] === "incomplete" )? "complete" : "incomplete")}
        }, 
    }
})

export const {changeCompleteStatusMedicine, changeCompleteStatusParaClinic, changeCompleteStatusTest} = actionsSlice.actions


export default actionsSlice.reducer;
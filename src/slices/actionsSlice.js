import { createSlice } from "@reduxjs/toolkit";

export const actionsSlice = createSlice({
    name: "actions",
    initialState: {
        medicine: {
            doctor: {status: "incomplete", doneStatus: false},
            drugstore: {status: "incomplete", doneStatus: false},
            courier: {status: "incomplete", doneStatus: false},
            interpretation: {status: "incomplete", doneStatus: false}
        },
        test: {
            doctor: {status: "incomplete", doneStatus: false},
            laboratory: {status: "incomplete", doneStatus: false},
            sample: {status: "incomplete", doneStatus: false},
            interpretation: {status: "incomplete", doneStatus: false}
        },
        paraClinic: {
            doctor: {status: "incomplete", doneStatus: false},
            paraClinic: {status: "incomplete", doneStatus: false}
        }
    },
    reducers: {
        changeCompleteStatusMedicine: (state, action) => {
            state.medicine = {...state.medicine, [action.payload.key]: {...state.medicine[action.payload.key], status: ((state.medicine[action.payload.key].status === "incomplete" )? "complete" : "incomplete")}}
        }, 
        changeCompleteStatusTest: (state, action) => {
            state.test = {...state.test, [action.payload.key]: {...state.test[action.payload.key], status: ((state.test[action.payload.key].status === "incomplete" )? "complete" : "incomplete")}}
        }, 
        changeCompleteStatusParaClinic: (state, action) => {
            state.paraClinic = {...state.paraClinic, [action.payload.key]: {...state.paraClinic[action.payload.key], status: ((state.paraClinic[action.payload.key].status === "incomplete" )? "complete" : "incomplete")}}
        },

        changeDoneStatusMedicine: (state,action) => {
            state.medicine = {...state.medicine, [action.payload.key]: {...state.medicine[action.payload.key], doneStatus: action.payload.doneStatus}}
        },
        changeDoneStatusTest: (state,action) => {
            state.test = {...state.test, [action.payload.key]: {...state.test[action.payload.key], doneStatus: action.payload.doneStatus}}
        },
        changeDoneStatusParaClinic: (state,action) => {
            state.paraClinic = {...state.paraClinic, [action.payload.key]: {...state.paraClinic[action.payload.key], doneStatus: action.payload.doneStatus}}
        },
    }
})

export const {changeCompleteStatusMedicine, changeCompleteStatusParaClinic, changeCompleteStatusTest,
    changeDoneStatusMedicine, changeDoneStatusParaClinic, changeDoneStatusTest} = actionsSlice.actions


export default actionsSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import actionReducer from "./slices/actionsSlice";
import inPersonReducer from "./slices/inPersonSlice";
import selectActionReducer from "./slices/selectActionSlice";
import statusMenuReducer from "./slices/statusMenuSlice";
import doctorReducer from "./slices/doctorSlice"

export const store = configureStore({
    reducer: {
        actions: actionReducer,
        inPerson: inPersonReducer,
        selectAction: selectActionReducer,
        statusMenu: statusMenuReducer,
        doctor: doctorReducer
    }
})
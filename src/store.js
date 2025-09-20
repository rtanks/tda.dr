import { configureStore } from "@reduxjs/toolkit";
import actionReducer from "./slices/actionsSlice";
import inPersonReducer from "./slices/inPersonSlice";

export const store = configureStore({
    reducer: {
        actions: actionReducer,
        inPerson: inPersonReducer
    }
})
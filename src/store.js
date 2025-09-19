import { configureStore } from "@reduxjs/toolkit";
import actionReducer from "./slices/actionsSlice";

export const store = configureStore({
    reducer: {
        actions: actionReducer,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Feature/todoSlice";

export const store = configureStore({
    reducer: todoReducer
});
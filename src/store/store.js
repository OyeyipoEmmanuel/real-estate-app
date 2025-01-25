import { configureStore } from "@reduxjs/toolkit";
import propertyReducers from "./fetchHomes"

export const store = configureStore({
    reducer: {
        fetchHomes: propertyReducers
    }
})
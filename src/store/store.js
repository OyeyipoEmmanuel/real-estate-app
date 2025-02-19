import { configureStore } from "@reduxjs/toolkit";
import propertyReducers from "./fetchHomes"
import favouriteHomesReducer from "./storeFavouriteHomes"

export const store = configureStore({
    reducer: {
        fetchHomes: propertyReducers,
        storeFavouriteHomes: favouriteHomesReducer
    }
})
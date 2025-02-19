import { createSlice } from "@reduxjs/toolkit"

const favouriteHomeSlice = createSlice({
    name: "Favourite Home",
    initialState: {
        datas: []
    },
    reducers: {
        addFavouriteHome: (state, action)=>{
            state.datas.push(action.payload)
        },
        removeFavouriteHome: (state, action)=>{
            state.datas.filter(homeId => homeId !== action.payload)
        }
    }
})

export const favouriteHomesAction = favouriteHomeSlice.actions

export default favouriteHomeSlice.reducer
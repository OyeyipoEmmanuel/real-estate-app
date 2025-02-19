import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import config from "../config/config";

export const fetchHomes = createAsyncThunk("fetchHomes", async () => {
  // const url =
    // "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4";

  // const response = await fetch(url, {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-key": "a77a343c92msh2e5d49a2ff47c73p1a3774jsn3a2dac11ee77",
  //     "x-rapidapi-host": "bayut.p.rapidapi.com",
  //   },
  // });

  const url =
    'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&rentFrequency=monthly&categoryExternalID=4'
    
  const response = await fetch(url, {
    method: "GET",
    headers: {
      'x-rapidapi-key': 'd9d8e68216msh23255ee32266ff1p131683jsn6ed0d0eca321',
      'x-rapidapi-host': 'bayut.p.rapidapi.com'
    }
  });

  try {
    const data = await response.json();

    const dataInLs = localStorage.setItem("All_Homes", JSON.stringify(data.hits))

    return dataInLs;
  } catch (error) {
    console.error(error);
  }
});

const propertySlice = createSlice({
  name: "properties",
  initialState: {
    homes: JSON.parse(localStorage.getItem("All_Homes")) || [],
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHomes.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.homes = action.payload;
        console.log(state.homes)
      })
      .addCase(fetchHomes.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default propertySlice.reducer;

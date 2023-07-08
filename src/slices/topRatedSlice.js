import { createSlice } from "@reduxjs/toolkit";
import { fetchTopRated } from "../store/thunks/fetchTopRated";

const topRatedSlice = createSlice({
    name: "toprated",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder){
        builder.addCase(fetchTopRated.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTopRated.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchTopRated.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default topRatedSlice.reducer;
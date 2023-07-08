import { createSlice } from "@reduxjs/toolkit";
import { fetchPopular } from "../store/thunks/fetchPopular";

const popularSlice = createSlice({
    name: "popular",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder){
        builder.addCase(fetchPopular.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchPopular.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchPopular.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default popularSlice.reducer;
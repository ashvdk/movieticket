import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendingTopics } from "../store/thunks/fetchTrendingTypes";

const trendingSlice = createSlice({
    name: "trending",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(fetchTrendingTopics.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTrendingTopics.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchTrendingTopics.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default trendingSlice.reducer;
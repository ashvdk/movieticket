import { createSlice } from "@reduxjs/toolkit";
import { fetchRecommendation } from "../store/thunks/fetchRecommendation";

const recommendationSlice = createSlice({
    name: "recommendation",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(fetchRecommendation.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchRecommendation.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchRecommendation.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default recommendationSlice.reducer;
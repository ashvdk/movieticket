import { createSlice } from "@reduxjs/toolkit";
import { fetchSimilarMovies } from "../store/thunks/fetchSimilarMovies";

const similarMovieSlice = createSlice({
    name: "similarmovie",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder){
        builder.addCase(fetchSimilarMovies.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchSimilarMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchSimilarMovies.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})

export default similarMovieSlice.reducer;
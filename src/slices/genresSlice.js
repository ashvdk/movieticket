import { createSlice } from "@reduxjs/toolkit";
import { fetchGenres } from "../store/thunks/fetchGenres";

const genresSlice = createSlice({
    name: "genres",
    initialState: { 
        data: null
     },
    extraReducers(builder) {
        builder.addCase(fetchGenres.pending, (state, action) => {
            //state.isLoading = true;
        })
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            //console.log(action.payload)
            // state.isLoading = false;
            state.data = {...action.payload.genres};
        })
        builder.addCase(fetchGenres.rejected, (state, action) => {
            // state.isLoading = false;
            // state.error = action.error;
        })
    }
})

export default genresSlice.reducer;
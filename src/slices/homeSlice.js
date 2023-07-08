import { createSlice } from "@reduxjs/toolkit";
import { fetchGenres } from "../store/thunks/fetchGenres";

const homeSlice = createSlice({
    name: "Home",
    initialState: {
        isLoading: false,
        url: null,
        genres: null,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(fetchGenres.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            //console.log(action.payload)
            state.isLoading = false;
            state.genres = {...action.payload.genres};
            state.url = {...action.payload.url};
        })
        builder.addCase(fetchGenres.rejected, (state, action) => {
            // state.isLoading = false;
            // state.error = action.error;
        })
    }
})

export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
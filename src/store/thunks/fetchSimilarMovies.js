import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/api";

export const fetchSimilarMovies = createAsyncThunk('fetch/similarMovies', async (option) => {
    console.log(option)
    console.log("option");
    const response = await axiosInstance(`/movie/${option.id}/similar`);
    return response.data;
    //return [];
})
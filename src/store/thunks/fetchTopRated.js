import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/api";

export const fetchTopRated = createAsyncThunk('fetch/toprated', async (tabs) => {
    const response = await axiosInstance.get(`/${tabs}/top_rated?language=en-US&page=1`);
    return response.data;
})
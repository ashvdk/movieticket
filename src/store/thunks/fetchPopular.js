import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/api";

export const fetchPopular = createAsyncThunk('fetch/popular', async (tabs) => {
    const response = await axiosInstance.get(`/${tabs}/popular?language=en-US&page=1`);
    return response.data;
})

import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/api";

export const fetchRecommendation = createAsyncThunk('fetch/recommendation', async (id) => {
    const response = await axiosInstance.get(`/movie/${id}/recommendations`);
    return response.data;
})
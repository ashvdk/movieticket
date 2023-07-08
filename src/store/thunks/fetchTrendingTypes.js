import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../utils/api";

export const fetchTrendingTopics = createAsyncThunk('trending/fetch', async (tabs) => {
    //await pause(2000);
    const response = await axiosInstance.get(`/trending/movie/${tabs}?language=en-US`);
    
    return response.data;
})
const pause = (duration) => {
    return new Promise((res, rej) => {
        setTimeout(() => res, duration);
    })
}
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/api";

export const fetchGenres = createAsyncThunk('fetch/genres', async () => {
    //const response = await ;
    const response = await Promise.all([
        axiosInstance.get('/genre/movie/list?language=en'),
        axiosInstance.get('/genre/tv/list?language=en'),
        axiosInstance.get('/configuration')
    ]);
    
    const data1 = response[0].data;
    const data2 = response[1].data;
    const data3 = response[2].data;
    console.log(data3)
    const AllGenres = [...data1.genres, ...data2.genres];
    //console.log(AllGenres)
    let genres = {};
    AllGenres.forEach((genre) => {
        if(genre.id){
            genres[genre.id] = genre;
        }
    })
    const url = {
        backdrop: data3.images.secure_base_url + "original",
        poster: data3.images.secure_base_url + "original", 
        profile: data3.images.secure_base_url + "original"
    }
    //console.log(genres)
    // Process and return the data
    return { genres, url };
})
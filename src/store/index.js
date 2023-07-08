import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../slices/homeSlice";
import trendingSlice from "../slices/trendingSlice";
import genresSlice from "../slices/genresSlice";
import popularSlice from "../slices/popularSlice";
import topRatedSlice from "../slices/topRatedSlice";
import similarMoviesSlice from "../slices/similarMoviesSlice";
import recommendationSlice from "../slices/recommendationSlice";

export const store = configureStore({
    reducer: {
        home: homeSlice,
        trending: trendingSlice,
        //genres: genresSlice,
        popular: popularSlice,
        toprated: topRatedSlice,
        similarmovies: similarMoviesSlice,
        recommendations: recommendationSlice
    }
})
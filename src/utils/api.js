import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzMyYTk0MmIwYWU1MTQ2MDJiZjI0NWU2YmZiYTdlOCIsInN1YiI6IjVmMjJmM2VjY2FhY2EyMDAzMzc0YmI3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b9xvkCctCgT2My4yvW1ldXF1zP1NSuDBylFJWUiEJhY`,
        accept: 'application/json',
    }
})
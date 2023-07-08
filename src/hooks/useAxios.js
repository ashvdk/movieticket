import { useEffect, useState } from "react"
import { axiosInstance } from "../utils/api";

export const useAxios = (url) => {
    const [data, setData] = useState(null);
    const [error, seterror] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axiosInstance(url);
          setData({...response.data})
        } catch (error) {
          seterror(error);
        }
        finally {
          setisLoading(false);
        }
        
        //console.log(response);
      }
      fetchData();
      return () => {
        
      }
    }, [url])
    
    return { data, error, isLoading }
}


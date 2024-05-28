import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';


interface FetchData<T> {
  data: T | undefined;
  loading: boolean;
  error?: Error;
}

const baseURL = 'http://localhost:3000';


const useFetch = <T>(url: string): FetchData<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(`${baseURL}${url}`);

        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };


    getData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

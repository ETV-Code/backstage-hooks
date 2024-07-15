import { useState, useEffect } from 'react';



export const useFetchData = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const responseJson = await response.json();
      setData(responseJson);
    } catch (error) {
      throw new Error('Error fetching data');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return {
    data,
  }
};
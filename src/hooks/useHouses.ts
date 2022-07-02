import axios from 'axios';
import { useEffect, useState } from 'react';

export interface IHouse {
  id: number;
  image: string;
  price: number;
  address: string;
}

const BASE_URL = process.env.REACT_APP_API_URL;

export const useHouses = () => {
  const [houses, setHouses] = useState<IHouse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${BASE_URL}/houses.json`);
      setHouses(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { houses, loading };
};

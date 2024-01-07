// useFetch.tsx
import { SetStateAction, useEffect, useState } from 'react';

interface ApiResponse {
  info?: {
    pages: number;
  };
  loading: boolean;
  results: any[];
}

const useFetch = (url: string) => {
  const [data, setData] = useState<ApiResponse>({
    loading: true,
    info: { pages: 0 },
    results: [],
  });

  useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((json: ApiResponse) => {
        setData({
          ...json,
          loading: false,
        });
      })
      .finally(() => {
        setTimeout(() => {
          setData((prevData) => ({
            ...prevData,
            loading: false,
          }));
        }, 2000);
      });
  }, [url]);

  return data;
};

export default useFetch;

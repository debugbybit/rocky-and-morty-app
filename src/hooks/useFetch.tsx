/** @jsxImportSource @emotion/react @use-client */
import { useState, useEffect } from "react";

export default function useFetch(url:string) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${url}?page=${page}`)
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.results);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, [page]);

  return { characters, loading, page, setPage };
}

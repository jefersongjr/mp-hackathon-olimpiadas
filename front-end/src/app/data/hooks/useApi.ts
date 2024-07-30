import { useState, useEffect } from 'react';

interface ApiResponse<T> {
  data: T;
}

export const useFetchData = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/${endpoint}`);
        if (!res.ok) {
          throw new Error('Erro na chamada da API');
        }
        const result: ApiResponse<T> = await res.json();
        setData(result.data);
      } catch (err) {
        setError('Erro ao buscar uma resposta');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

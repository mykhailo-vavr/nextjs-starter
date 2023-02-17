import { useCallback, useEffect, useState } from 'react';
import { ExtendedApiRoute, RequestConfig, RequestError } from '../types';
import { apiClient } from '../client';

// TODO: Check useToggle hook

export const useFetchApi = <T>(url: ExtendedApiRoute, initialConfig?: RequestConfig) => {
  const [loading, toggle] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<RequestError | null>(null);

  const fetchData = useCallback(
    async (config?: RequestConfig) => {
      try {
        toggle(true);
        const res = await apiClient.get<T>(url, config);
        setData(res.data);
        setError(null);
      } catch (e) {
        setError(e as RequestError);
      } finally {
        toggle(false);
      }
    },
    [url],
  );

  useEffect(() => {
    fetchData(initialConfig).catch(() => {});
  }, []);

  return { data, error, loading, refetch: fetchData };
};

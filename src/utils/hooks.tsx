import { useState, useEffect } from 'react';

interface Result {
  title: string;
  description: string;
}

interface DataInterface {
  surveyData?: {};
  resultsData?: [Result];
}
const useFetch = (url: string) => {
  const [data, setData] = useState<DataInterface>({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    setLoading(true);
    fetchData();
  }, [url]);
  return { isLoading, data, error };
};

export default useFetch;

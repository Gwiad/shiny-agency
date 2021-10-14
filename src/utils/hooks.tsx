import React, { useState, useEffect } from 'react';

interface DataInterface {
  surveyData?: {};
}
const useFetch = (url: string) => {
  const [data, setData] = useState<DataInterface>({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    setLoading(true);
    fetchData();
  }, [url]);
  return { isLoading, data };
};

export default useFetch;

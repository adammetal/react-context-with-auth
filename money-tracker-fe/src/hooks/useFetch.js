import { useCallback, useEffect, useState } from "react";

const useFetch = (url, instant = true) => {
  const [loading, setLoading] = useState(instant);
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetcher = useCallback(
    (cfg = {}) => {
      setFetching(true);

      fetch(url, cfg)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
        })
        .finally(() => {
          setFetching(false);
          setLoading(false);
        });
    },
    [url]
  );

  useEffect(() => {
    if (instant === true) {
      fetcher();
    }
  }, [instant]);

  return { loading, fetching, data, error, fetcher };
};

export default useFetch;

import { useCallback, useEffect, useRef, useState } from "react";

const useFetch = (url, instant = true, onDone = () => {}) => {
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
          onDone(data);
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
    [url, onDone]
  );

  useEffect(() => {
    if (instant === true) {
      fetcher();
    }
  }, [instant]);

  return { loading, fetching, data, error, fetcher, onDone };
};

export default useFetch;

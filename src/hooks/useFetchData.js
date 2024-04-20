import { useEffect, useState } from "react";

const useFetchData = (path, key) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/data.json");

      const data = await res.json();

      setData(data[key]);
    };

    try {
      getData();
    } catch (e) {
      setError("Error fetching data:", e);
    }
  }, [key]);

  return {
    data,
    error,
  };
};

export default useFetchData;

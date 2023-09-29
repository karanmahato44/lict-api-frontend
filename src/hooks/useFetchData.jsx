import { useState, useEffect } from "react"

const useFetchData = (url) => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('Error fetching data')
        }

        return res.json();
      })
      .then(resdata => {
        setData(resdata);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        console.log(err.message);
        setError(err);
        setIsLoading(false);
      })

  }, [url]);

  return { data, isLoading, error };
}

export default useFetchData;
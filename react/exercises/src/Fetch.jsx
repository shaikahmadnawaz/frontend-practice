import { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetching data...</h1>
      <p>id: {data.id}</p>
      <p>title: {data.title}</p>
      <p>body: {data.body}</p>
    </div>
  );
};

export default Fetch;

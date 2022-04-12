import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Api = () => {
  // 1. Get the data
  // 2. Save the data

  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(); // added loading state

  // Using async
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const res = await fetch(`https://swapi.dev/api/people/${count}`);
      const data = await res.json();
      setStarWarsData(data);
      setLoading(false);
    }
    getData();
  }, [count]);

  // Using .then
  //   useEffect(() => {
  //     setLoading(true);
  //     fetch(`https://swapi.dev/api/people/${count}`)
  //       .then((res) => res.json())
  //       .then((data) => setStarWarsData(data))
  //       .then(() => setLoading(false));
  //   }, [count]);

  return (
    <div>
      <Link to="/">Back / Home</Link>
      <h1>Api</h1>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Get Next Character
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      )}
    </div>
  );
};

export default Api;

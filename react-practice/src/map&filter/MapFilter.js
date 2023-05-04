import React, { useState, useEffect } from "react";
import axios from "axios";

const MapFilter = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((user) => {
      setUsers(user.data);
    });
  }, [users]);

  const mapData = () => {
    // let mappedArray = users.map((user) => user.id * 2);
    // console.log(mappedArray);

    let filterData = users.filter((user) => {
      return user.name === "Leanne Graham";
    });
    console.log(filterData);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="">Users</h1>
      <div className="card flex flex-row justify-center items-center">
        {users.map((user) => (
          <div className="card-item border mx-2">
            <p>{user.name}</p>
          </div>
        ))}
      </div>
      <button onClick={mapData}>Click here</button>
    </div>
  );
};

export default MapFilter;

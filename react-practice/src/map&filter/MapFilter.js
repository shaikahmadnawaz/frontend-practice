import React, { useState, useEffect } from "react";
import axios from "axios";

const MapFilter = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((user) => {
      setUsers(user.data);
      console.log(users);
    });
  }, [users]);

  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((user) => {
          return <p>{user.name}</p>;
        })}
      </div>
    </div>
  );
};

export default MapFilter;

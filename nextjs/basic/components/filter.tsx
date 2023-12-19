"use client";

import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
}

const users: User[] = [
  { id: 1, name: "Alice", age: 25, gender: "female" },
  { id: 2, name: "Bob", age: 30, gender: "male" },
  { id: 3, name: "Charlie", age: 35, gender: "male" },
];

export const Filter: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string>("");

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return !selectedGender || user.gender === selectedGender;
  });

  return (
    <div className="mx-auto mt-4 rounded-lg">
      <div className="mb-4 text-black">
        <select
          value={selectedGender}
          onChange={handleGenderChange}
          className="mt-1 p-2 border border-none outline-none rounded-md w-full appearance-none"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        {filteredUsers.map((user) => (
          <div key={user.id} className="border p-4 mb-4 rounded-md">
            <div className="font-bold">{user.name}</div>
            <div>Age: {user.age}</div>
            <div>Gender: {user.gender}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

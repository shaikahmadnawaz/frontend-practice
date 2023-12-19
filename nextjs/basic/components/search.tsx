"use client";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

async function getData(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  console.log(res);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const Search: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getData().then((userData) => setData(userData));
  }, []);

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full p-4 ps-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search here..."
          required
        />
      </div>

      <div className="mt-4 text-center">
        {filteredData.map((user) => (
          <div key={user.id} className="my-2">
            <div className="text-sm font-medium text-white">{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

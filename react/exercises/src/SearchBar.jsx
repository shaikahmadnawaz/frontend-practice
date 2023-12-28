import { useState } from "react";

const data = ["apple", "banana", "orange"];

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <input
        type="search"
        placeholder="search here..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

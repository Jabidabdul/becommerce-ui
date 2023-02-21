import React, { useState } from "react";
import "./style.css";

const SearchBar = (props) => {
  const { data, setData } = props;

  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(filteredData);
  };
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

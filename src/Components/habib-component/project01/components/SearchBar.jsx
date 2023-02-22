import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/post/${value}`);
    }
  };

  // console.log(title);
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="search here..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

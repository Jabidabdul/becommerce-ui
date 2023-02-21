import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./style.css";

const SearchBar = (props) => {
  const { data, setData } = props;

  const navigate = useNavigate();


  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setData(filteredData);
      navigate(`/search/${searchTerm}`);
      searchTerm(``);
    }
  };
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

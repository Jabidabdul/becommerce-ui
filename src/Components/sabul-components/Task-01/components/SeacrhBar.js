import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css"

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

  return (
    <div className="SearchBar">
        <h1>Plato Search</h1>
      <form onSubmit={handleSubmit}>
        <input className='input'
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search ..."
        /> <br></br>
        <button type="submit" className="Button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

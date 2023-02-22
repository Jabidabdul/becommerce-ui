import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SearchBar from "../components/SeacrhBar";
import "./style.css";

const Single = () => {
  const [data, setData] = useState([]);

  const location = useLocation();

  const title = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products?q=${title}`
        );
        const filteredData = res.data.products.filter((product) => {
          return product.title.toLowerCase().includes(title.toLowerCase());
        });
        setData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [title]);

  return (
    <div className="single">
      <div className="singleSearch">
        <SearchBar />
      </div>
      {data.length > 0 ? (
      data.map((product, index) => (
        <div className="single" key={index}>
          <span className="img"><a href={product.thumbnail}>{product.thumbnail}</a></span>
          <h3 className="title">{product.title}</h3>
          <span className="desc">{product.description}</span>
          <span className="rating">Rating - {product.rating}</span>
          <span className="price">Rs. {product.price}</span>
        </div>
      ))
    ) : (
      <p>No data found.</p>
    )}
    </div>
  );
};

export default Single;
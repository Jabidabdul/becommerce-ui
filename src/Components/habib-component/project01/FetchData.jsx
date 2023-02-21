import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css"

const API_URL = "https://dummyjson.com/products";

const FetchData = () => {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
    //   console.log(response.data.products);
        setData(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData(API_URL);
  }, []);


  return (
    <div className="container-fluid bg-dark py-2">
      <h1>Products</h1>
      <div className="card">
        {data.map((item) => (
          <div className="card" key={item.id} style={{ width: "18rem" }}>
            <img src={item.thumbnail} class="card-img-top thumbnail" alt="..." />
            <div className="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p className="card-text">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;

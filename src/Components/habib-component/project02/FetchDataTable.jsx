import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const FetchDataTable = () => {
  const [data, setData] = useState([]);
  const fetchDataTable = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDataTable(API_URL);
  }, []);

  return (
    <div className="container">
      <h1>Show Data in Table</h1>
      <div className="table">
      <table class="table my-2">
  <thead>
    <tr>
      <th scope="col">Sl No.</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
    {data.map((currElem) => (
        <tr>
      <th scope="row">{currElem.id}</th>
      <td>{currElem.title}</td>
      <td>{currElem.body}</td>
    </tr>
    ))}
    
    
    
  </tbody>
</table>
      </div>
    </div>
  );
};

export default FetchDataTable;

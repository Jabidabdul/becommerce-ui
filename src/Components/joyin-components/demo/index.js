import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Demo = () => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    (async () =>
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          let data = res.data.filter((obj) => obj.userId == 1);
          //   console.log(res.data);
          setGetData(data);
        })
        .catch((err) => console.log(err)))();
  }, []);

  const obj = {};
  return (
    <div>
      <div>
        {getData.length > 0 &&
          getData.map((obj, index) => {
            console.log("object", obj);
            return <div key={index}>{obj.title}</div>;
          })}
      </div>
      <Child1 getData={getData} setGetData={setGetData} />
    </div>
  );
};

function Child1(props) {
  console.log("child props", props.getData);

  return (
    <div>
      I am a child
      <button
        onClick={() =>
          props.setGetData([
            {
              title: "Hi",
            },
          ])
        }
      >
        Click top change parent value
      </button>
    </div>
  );
}

export default Demo;

import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");

  function hanldeIdChange(e) {
    setId(e.target.value);
  }

  function onFetch() {
    axios
      .get(`https://jsonplaceholder.typicode.com/post/${id}`)
      .then((res) => {
        {
          setTitle(res.data.title);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <input onChange={hanldeIdChange} value={id}></input>
      <button onClick={onFetch}>Fetch Title</button>
      <p>{title}</p>
    </div>
  );
};

export default Form;

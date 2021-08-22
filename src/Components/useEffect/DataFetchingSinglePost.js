import React, { useEffect, useState } from "react";
import axios from "axios";

//data fetching using the useState and useEffect
function DataFetchingSinglePost() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, SetIdFromButtonClick] = useState(1);

  const handleClick = () => {
    SetIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Click
      </button>
      <ul style={{ display: "flex", justifyContent: "center" }}>
        <li>{post.id}</li>
        <li key={post.id}>{post.title}</li>
      </ul>
    </div>
  );
}

export default DataFetchingSinglePost;

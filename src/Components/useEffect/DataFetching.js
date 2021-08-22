import React, { useEffect, useState } from "react";
import axios from "axios";

//data fetching using the useState and useEffect
function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <div>
            <li key={post.id}>{post.title}</li>
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;

import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialValue = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something Went Wrong!",
        post: {},
      };
    default:
      return state;
  }
};

function DataFetchingUsingUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <>
      <div>
        {state.loading ? "loading" : state.post.title}
        {state.error ? state.error : null}
      </div>
    </>
  );
}

export default DataFetchingUsingUseReducer;



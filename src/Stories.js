import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";
import "./App.css";
const Stories = () => {
  const { hits, removePost } = useGlobalContext();

  return (
    <>
      <div className="stories">
        <h1>welcome to tech News</h1>
        {hits.map((curr) => {
          const { title, author, objectID, url, num_comments } = curr;
          return (
            <>
              <div className="card">
                <h1>{title}</h1>
                <p>
                  By {author} | <span>{num_comments}</span> comments
                </p>
                <div className="card-button" style={{ padding: "10px" }}>
                  <a
                    href={url}
                    style={{ color: "seagreen", textDecoration: "none" }}
                  >
                    Read more
                  </a>
                  <a
                    href="#"
                    onClick={() => removePost(objectID)}
                    style={{ float: "right", color: "red" }}
                  >
                    remove
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Stories;

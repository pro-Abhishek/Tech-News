import React from "react";
import { useGlobalContext } from "./Context";
const Pagination = () => {
  const { page, nbPages, getPrePage, getNextPage } = useGlobalContext();
  return (
    <>
      <div className="page_main">
        <div className="page">
          <button
            onClick={() => getPrePage(page)}
            className="prev"
            style={{
              backgroundColor: "#ffe4c4",
              width: "50px",
              borderRadius: "10px",
              height: "30px",
            }}
          >
            <span>Prev</span>
          </button>
          <h3>
            {page} of {nbPages}
          </h3>
          <button
            onClick={() => getNextPage(page)}
            className="next"
            style={{
              backgroundColor: "#ffe4c4",
              width: "50px",
              borderRadius: "10px",
              height: "30px",
            }}
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Pagination;

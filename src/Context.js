import React, { useContext, useReducer } from "react";
import reducer from "./Reducer";
import { useEffect } from "react";
import { type } from "@testing-library/user-event/dist/type";
let api = "https://hn.algolia.com/api/v1/search?";
const Name = React.createContext();
const initialState = {
  query: "",
  nbPages: 0,
  page: 1,
  hits: [],
};
const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(`${url}query=${state.query}&page=${state.page}`);
      const data = await res.json();
      //   console.log(data);
      dispatch({
        type: "get_stories",
        payload: {
          hits: data.hits,
          nbpages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (post_id) => {
    dispatch({
      type: "remove_post",
      payload: post_id,
    });
  };

  const SearchPost = (searchQuery) => {
    dispatch({ type: "search_query", payload: searchQuery });
  };

  const getPrePage = (pre_page) => {
    if (pre_page == 1) {
      return;
    }
    dispatch({
      type: "pre_page",

      //payload:pre_page
    });
  };

  const getNextPage = (next_page) => {
    if (next_page == 50) {
      next_page = 1;
    }

    dispatch({
      type: "next_page",
      // payload:next_page
    });
  };

  useEffect(() => {
    fetchApiData(api);
  }, [state.query, state.page]);

  return (
    <Name.Provider
      value={{ ...state, removePost, SearchPost, getPrePage, getNextPage }}
    >
      {children}
    </Name.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(Name);
};
export { useGlobalContext, AppContext };

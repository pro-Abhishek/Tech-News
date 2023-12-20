const reducer = (state, action) => {
  switch (action.type) {
    case "get_stories":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbpages,
      };
    case "remove_post":
      return {
        ...state,
        hits: state.hits.filter(
          (curElement) => curElement.objectID != action.payload
        ),
      };

    case "search_query":
      return {
        ...state,
        query: action.payload,
      };
    case "pre_page":
      return {
        ...state,
        page: state.page - 1,
      };

    case "next_page":
      return {
        ...state,
        page: state.page + 1,
      };
  }

  return state;
};
export default reducer;

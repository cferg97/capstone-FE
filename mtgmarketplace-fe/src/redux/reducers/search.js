import {
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  USER_SEARCH_RESULTS,
} from "../actions";

const initialState = {
  searchQuery: "",
  searchResults: [],
  filters: [],
  userSearchResults: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    case SET_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action.payload,
      };
    }
    case USER_SEARCH_RESULTS: {
      return {
        ...state,
        userSearchResults: action.payload,
      };
    }
    default:
      return state;
  }
};

export default searchReducer;

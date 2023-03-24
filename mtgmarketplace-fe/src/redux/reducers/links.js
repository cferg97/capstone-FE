import {
  TOTAL_SEARCH_RESULTS,
  PAGE_NUMBERS,
  SET_LINKS_NEXT,
  SET_LINKS_PREV,
} from "../actions";

const initialState = {
  prev: "",
  next: "",
  totalPages: "",
  totalProducts: "",
};

const linksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOTAL_SEARCH_RESULTS: {
      return {
        ...state,
        totalProducts: action.payload,
      };
    }
    case PAGE_NUMBERS: {
      return {
        ...state,
        totalPages: action.payload,
      };
    }
    case SET_LINKS_NEXT: {
      return {
        ...state,
        next: action.payload,
      };
    }
    case SET_LINKS_PREV: {
      return {
        ...state,
        prev: action.payload,
      };
    }
    default:
      return state;
  }
};

export default linksReducer
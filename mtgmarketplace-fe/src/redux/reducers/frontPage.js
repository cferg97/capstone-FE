import { SET_TRENDS, SET_BARGAINS } from "../actions";

const initialState = {
  bargains: [],
  trends: [],
};

const frontPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRENDS: {
      return {
        ...state,
        trends: action.payload,
      };
    }
    case SET_BARGAINS: {
      return {
        ...state,
        bargains: action.payload,
      };
    }
    default:
      return state;
  }
};

export default frontPageReducer;

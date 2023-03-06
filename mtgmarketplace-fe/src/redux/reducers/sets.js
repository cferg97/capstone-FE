import { SET_SETS } from "../actions";

const initialState = {
  setNames: [],
};

const setReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETS: {
      return {
        ...state,
        setNames: action.payload,
      };
    }
    default:
      return state;
  }
};

export default setReducer;

import { SET_CURRENT_USER } from "../actions";

const initialState = {
  currentUser: [],
  loading: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;

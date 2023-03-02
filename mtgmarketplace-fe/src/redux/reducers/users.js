import {
  SET_CURRENT_PROFILE,
  SET_CURRENT_USER,
} from "../actions";

const initialState = {
  loggedIn: false,
  currentUser: [],
  selectedProfile: [],
  loading: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
      };
    }
    case SET_CURRENT_PROFILE: {
      return {
        ...state,
        selectedProfile: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;

import {
  SET_CURRENT_PROFILE,
  SET_CURRENT_USER,
  SET_CURRENT_CARD,
  CURRENT_CARD_LISTINGS,
} from "../actions";

const initialState = {
  loggedIn: false,
  currentUser: [],
  selectedProfile: [],
  searchResults: [],
  selectedProduct: [],
  selectedProductListings: [],
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
    case SET_CURRENT_CARD: {
      return {
        ...state,
        selectedProduct: action.payload,
      };
    }
    case CURRENT_CARD_LISTINGS: {
      return {
        ...state,
        selectedProductListings: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;

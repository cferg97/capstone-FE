import { SET_USER_CART } from "../actions";

const initialState = {
  cart: [],
};

const userCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_CART: {
      return {
        ...state,
        cart: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userCartReducer;

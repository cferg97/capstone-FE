export const SET_LOGGED_IN = "SET_LOGGED_IN";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE";
export const SET_CURRENT_CARD = "SET_CURRENT_CARD";
export const CURRENT_CARD_LISTINGS = "CURRENT_CARD_LISTINGS";
export const SET_SETS = "SET_SETS";
export const SET_TRENDS = "SET_TRENDS";
export const SET_BARGAINS = "SET_BARGAINS";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const SET_USER_CART = "SET_USER_CART";

export const retrieveSetData = () => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("userAccessToken");
      const token = accessToken.split('"').join("");
      let response = await fetch("http://localhost:3001/sets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: SET_SETS,
          payload: fetchedData,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const newUserAction = (newUserInfo) => {
  return async (dispatch) => {
    try {
      let response = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        body: JSON.stringify(newUserInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("user created");
      } else {
        console.log("Error posting user");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const logInAction = (userForm) => {
  return async (dispatch) => {
    try {
      let response = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        body: JSON.stringify(userForm),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Logged in successfully");
        let fetchedData = await response.json();
        localStorage.setItem("userAccessToken", fetchedData.accessToken);
        window.location.reload(true);
      } else {
        console.log("Couldn't log in");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCurrentUser = () => {
  return async (dispatch) => {
    const accessToken = localStorage.getItem("userAccessToken");
    const token = accessToken.split('"').join("");
    try {
      let response = await fetch("http://localhost:3001/users/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: SET_CURRENT_USER,
          payload: fetchedData,
        });
      } else {
        console.log("Couldn't fetch user information");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const editProfileAction = (userForm) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("userAccessToken");
      const token = accessToken.split('"').join("");

      let response = await fetch("http://localhost:3001/users/me", {
        method: "PUT",
        body: JSON.stringify(userForm),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        dispatch(getCurrentUser());
      } else {
        console.log("Couldn't update user information");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchUserProfile = (username) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("userAccessToken");
      const token = accessToken.split('"').join("");

      let response = await fetch(`http://localhost:3001/users/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log("fetched profile");
        let fetchedData = await response.json();
        dispatch({
          type: SET_CURRENT_PROFILE,
          payload: fetchedData,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const searchByName = (searchQuery) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `http://localhost:3001/search?name=/^.*${searchQuery}.*/i`
      );
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: SET_SEARCH_RESULTS,
          payload: fetchedData.products,
        });
      } else {
        console.log("Couldn't fetch search results");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const advancedSearchAction = (url) => {
  return async (dispatch) => {
    try {
      let response = await fetch(url);
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: SET_SEARCH_RESULTS,
          payload: fetchedData.products,
        });
      } else {
        console.log("Couldn't fetch search results");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getTrendsAction = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "http://localhost:3001/sell?sort=-price&limit=10"
      );
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: SET_TRENDS,
          payload: fetchedData.products,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getBargainsAction = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "http://localhost:3001/sell?sort=price&limit=10"
      );
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: SET_BARGAINS,
          payload: fetchedData.products,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const setCurrentProductAction = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:3001/cards/singles/${id}`);
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: SET_CURRENT_CARD,
          payload: fetchedData,
        });
      } else {
        console.log("error fetching card info");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCurrentProductListings = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:3001/sell/${id}`);
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: CURRENT_CARD_LISTINGS,
          payload: fetchedData,
        });
      } else {
        console.log("err fetching listings");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchUserCartAction = () => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("userAccessToken");
      const token = accessToken.split('"').join("");

      let response = await fetch(`http://localhost:3001/carts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        let fetchedData = await response.json();
        dispatch({
          type: SET_USER_CART,
          payload: fetchedData.items,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const addToCartAction = (id) => {
  return async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("userAccessToken");
      const token = accessToken.split('"').join("");

      let response = await fetch(`http://localhost:3001/carts/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(response.ok){
        dispatch(fetchUserCartAction())
      }
    } catch (err) {
      console.log(err)
    }
  };
};

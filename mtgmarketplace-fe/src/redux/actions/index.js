export const SET_LOGGED_IN = "SET_LOGGED_IN";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE";
export const SET_SETS = "SET_SETS";

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
    } catch (err) {}
  };
};

export const editProfileAction = (userForm) => {
  return async (dispatch) => {
    try {
    } catch (err) {}
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
    } catch (err) {}
  };
};

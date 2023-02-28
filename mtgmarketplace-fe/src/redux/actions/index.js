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

import { authAction } from "./auth-slice";

export const signUp = (userDetails) => {
  const baseUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCOXYGDoFgU8UDbBDjYt3UOxefk96nn6t4";

  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(baseUrl, {
        method: "post",
        body: JSON.stringify({
          email: userDetails.userId,
          password: userDetails.password,
          confirmPassword: userDetails.confirmPassword,
          returnSecureToken: true,
        }),
        Headers: {
          "Content-Type": "application/json",
        },
      });

      const authData = await response.json();

      if (response.status !== 200) {
        throw new Error(authData.error.message);
      }

      return authData;
    };

    try {
      const authData = await sendRequest();

      alert("Your are successfully register!");
    } catch (error) {
      alert(error);
    }
  };
};

export const signIn = (userLoginData) => {
  const baseUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCOXYGDoFgU8UDbBDjYt3UOxefk96nn6t4";

  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(baseUrl, {
        method: "post",
        body: JSON.stringify({
          email: userLoginData.userId,
          password: userLoginData.password,
          returnSecureToken: true,
        }),
        Headers: {
          "Content-Type": "application/json",
        },
      });

      const authData = await response.json();

      if (response.status !== 200) {
        throw new Error(authData.error.message);
      }

      return authData;
    };

    try {
      const authData = await sendRequest();

      alert("Your are successfully loggedIn!");
    } catch (error) {
      alert(error);
    }
  };
};

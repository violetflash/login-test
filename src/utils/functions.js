import { LS_USER_KEY } from "./constants";

export const checkIsLoggedIn = () => {
  return localStorage.getItem(LS_USER_KEY);
};

export const getUserFromLS = () => {
  return JSON.parse(JSON.stringify(localStorage.getItem(LS_USER_KEY)));
}

export const deleteUserFromLS = () => {
  localStorage.removeItem(LS_USER_KEY);
}

export const addUserToLS = (value) => {
  localStorage.setItem(LS_USER_KEY, JSON.stringify(value));
}
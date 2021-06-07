import { userActionTypes } from "./user.types";

const { SET_CURRENT_USER, SET_USER_ADDRESS, EDIT_USER_PROFILE } =
  userActionTypes;

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const setUserAddress = (address) => ({
  type: SET_USER_ADDRESS,
  payload: address,
});

export const editUserProfile = (user) => ({
  type: EDIT_USER_PROFILE,
  payload: user,
});

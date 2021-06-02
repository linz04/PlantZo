import { userActionTypes } from "./user.types";

const { SET_CURRENT_USER } = userActionTypes;

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

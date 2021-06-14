import { userActionTypes } from "./user.types";

const { SET_CURRENT_USER, SET_USER_ADDRESS, EDIT_USER_PROFILE } =
  userActionTypes;

const INITIAL_STATE = {
  currentUser: {
    uid: null,
    displayName: "",
    email: "",
    token: "",
    profileImage: "",
    backgroundProfileImage: "",
    address: "",
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case SET_USER_ADDRESS:
      return {
        ...state,
        currentUser: { ...state.currentUser, address: action.payload },
      };
    case EDIT_USER_PROFILE:
      return {
        ...state,
        displayName: action.payload.displayName,
        profileImage: "",
        backgroundProfileImage: "",
        address: action.payload.address,
      };
    default:
      return state;
  }
};

export default userReducer;

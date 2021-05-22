import { userActionTypes } from "./user.types";

const { SET_CURRENT_USER } = userActionTypes;

const INITIAL_STATE = {
  currentUser: {
    displayName: "Display Name",
    email: "RPL_A@plantzo.com",
    profileImage:
      "https://i.pinimg.com/236x/54/aa/23/54aa23c43d642664d0d8d55e060caad5--indian-meme-meme-faces.jpg",
    backgroundImageProfile:
      "https://awsimages.detik.net.id/community/media/visual/2018/01/17/4c003a60-7b3f-452b-a719-9d84fb489e79_169.jpeg?w=700&q=90",
    address:
      "Kampus IPB, Jl. Raya Dramaga, Babakan, Kec. Dramaga, Kota Bogor, Jawa Barat 16680",
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

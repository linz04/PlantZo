import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import LabelContainer from "../components/LabelContainer";
import UserFormInput from "../components/UserFormInput";
import { selectCurrentUser } from "../redux/user/user.selectors";

const AboutUserPage = ({ history }) => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const {
    email = "RPL_A@plantzo.com",
    profileImage = "https://i.pinimg.com/236x/54/aa/23/54aa23c43d642664d0d8d55e060caad5--indian-meme-meme-faces.jpg",
    backgroundProfileImage = "https://awsimages.detik.net.id/community/media/visual/2018/01/17/4c003a60-7b3f-452b-a719-9d84fb489e79_169.jpeg?w=700&q=90",
    address = "Kampus IPB, Jl. Raya Dramaga, Babakan, Kec. Dramaga, Kota Bogor, Jawa Barat 16680",
  } = currentUser;

  return (
    <div className="flex flex-col flex-1">
      <LabelContainer onClick={() => history.push("/user")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span>Tentang Anda</span>
      </LabelContainer>
      <LabelContainer>
        <div className="flex flex-col flex-1">
          <div>Foto sampul Anda</div>
          <div className="mt-4">
            <img
              src={backgroundProfileImage}
              alt="Latar profil"
              className="h-full w-full bg-cover"
            />
          </div>
        </div>
      </LabelContainer>
      <LabelContainer>
        <div className="flex flex-col flex-1">
          <div>Foto profil Anda</div>
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-52 h-52 bg-white rounded-full overflow-hidden mt-4 border-2 border-black">
              <img
                src={profileImage}
                alt="Foto profil"
                className="h-full w-full bg-cover"
              />
            </div>
          </div>
        </div>
      </LabelContainer>
      <LabelContainer>
        <div className="flex flex-1 justify-between items-center">
          <div>Username Anda</div>
          <div className="text-2xl">{email}</div>
        </div>
      </LabelContainer>
      <LabelContainer>
        <div className="flex flex-col flex-1 space-y-2">
          <div className="mb-4">Alamat Anda</div>
          <UserFormInput
            type="text"
            name="address"
            value={address}
            required
            large
            disabled
          />
        </div>
      </LabelContainer>
    </div>
  );
};

export default withRouter(AboutUserPage);

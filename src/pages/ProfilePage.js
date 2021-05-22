import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

import LabelContainer from "../components/LabelContainer";
import UserFormInput from "../components/UserFormInput";
import { selectCurrentUser } from "../redux/user/user.selectors";

const ProfilePage = ({ history }) => {
  const user = useSelector((state) => selectCurrentUser(state));

  const [formProfile, setFormProfile] = useState({
    username: "",
    newUsername: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
    place: "",
    selectedProfileImage: null,
    selectedBackgroundProfileImage: null,
  });

  const {
    username,
    newUsername,
    password,
    newPassword,
    confirmPassword,
    place,
    selectedProfileImage,
    selectedBackgroundProfileImage,
  } = formProfile;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormProfile({ ...formProfile, [name]: value });
  };

  const handleImageSelected = (e) => {
    const { name, files } = e.target;
    console.log(files[0].name);
    setFormProfile({ ...formProfile, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("username", newUsername);
    fd.append("password", newPassword);
    fd.append("profile_image", selectedProfileImage, selectedProfileImage.name);
    fd.append(
      "background_image",
      selectedBackgroundProfileImage,
      selectedBackgroundProfileImage.name
    );

    axios.post("/settings/profile", fd).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    setFormProfile({
      ...formProfile,
      username: "",
      newUsername: "",
      password: "",
      newPassword: "",
      confirmPassword: "",
      place: "",
      selectedProfileImage: null,
      selectedBackgroundProfileImage: null,
    });

    history.push("/user");
  };

  return (
    <div className="flex flex-1 flex-col">
      <LabelContainer onClick={() => history.push("/user")}>
        <span className="mb-2 mr-2">&larr;</span>
        <span>Pengaturan &gt; Profil</span>
      </LabelContainer>
      <form type="post" onSubmit={handleSubmit}>
        <LabelContainer>
          <div className="flex flex-col flex-1 space-y-2">
            <div className="mb-4">USERNAME</div>
            <UserFormInput
              type="text"
              name="username"
              label="Username sekarang"
              value={username}
              required
              handleChange={handleChange}
            />
            <UserFormInput
              type="text"
              name="newUsername"
              label="Username baru"
              value={newUsername}
              required
              handleChange={handleChange}
            />
          </div>
        </LabelContainer>
        <LabelContainer>
          <div className="flex flex-col flex-1 space-y-2">
            <div className="mb-4">FOTO PROFILE</div>
            <UserFormInput
              type="file"
              name="selectedProfileImage"
              label="Upload profile image"
              required
              handleChange={handleImageSelected}
            />
          </div>
        </LabelContainer>
        <LabelContainer>
          <div className="flex flex-col flex-1 space-y-2">
            <div className="mb-4">FOTO SAMPUL</div>
            <UserFormInput
              type="file"
              name="selectedBackgroundProfileImage"
              label="Upload profile image"
              required
              handleChange={handleImageSelected}
            />
          </div>
        </LabelContainer>
        <LabelContainer>
          <div className="flex flex-col flex-1 space-y-2">
            <div className="mb-4">ALAMAT</div>
            <UserFormInput
              type="text"
              name="place"
              label="Alamat lengkap"
              value={place}
              required
              large
              handleChange={handleChange}
            />
          </div>
        </LabelContainer>
        <LabelContainer>
          <div className="flex flex-col flex-1 space-y-2">
            <div className="mb-4">UBAH KATA SANDI</div>
            <UserFormInput
              type="password"
              name="password"
              label="Password lama"
              value={password}
              required
              handleChange={handleChange}
            />
            <UserFormInput
              type="password"
              name="newPassword"
              label="Password baru"
              value={newPassword}
              required
              handleChange={handleChange}
            />
            <UserFormInput
              type="password"
              name="confirmPassword"
              label="Konfirmasi password baru"
              value={confirmPassword}
              required
              handleChange={handleChange}
            />
          </div>
        </LabelContainer>
        <LabelContainer>
          <div className="flex flex-1 justify-end space-x-6">
            <div>
              <button>BUANG PERUBAHAN</button>
            </div>
            <div>
              <button type="submit">KONFIRMASI PERUBAHAN</button>
            </div>
          </div>
        </LabelContainer>
      </form>
    </div>
  );
};

export default withRouter(ProfilePage);

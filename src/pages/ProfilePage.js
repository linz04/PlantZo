import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

import LabelContainer from "../components/LabelContainer";
import UserFormInput from "../components/UserFormInput";
import { selectCurrentUser } from "../redux/user/user.selectors";

const ProfilePage = ({ history }) => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const { displayName } = currentUser;

  const [formProfile, setFormProfile] = useState({
    firstName: "",
    lastName: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    address: "",
    selectedProfileImage: null,
    selectedBackgroundProfileImage: null,
  });

  const {
    firstName,
    lastName,
    oldPassword,
    newPassword,
    confirmPassword,
    address,
    selectedProfileImage,
    selectedBackgroundProfileImage,
  } = formProfile;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormProfile({ ...formProfile, [name]: value });
  };

  const handleImageSelected = (e) => {
    const { name, files } = e.target;
    setFormProfile({ ...formProfile, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setFormProfile({ ...formProfile, newPassword: "", confirmPassword: "" });
      return alert("Password baru dan Konfirmasi password tidak Match :(");
    }

    const fd = new FormData();

    fd.append("firstName", firstName);
    fd.append("lastName", lastName);
    fd.append("oldPassword", oldPassword);
    fd.append("newPassword", newPassword);
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
      firstName: "",
      lastName: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      address: "",
      selectedProfileImage: null,
      selectedBackgroundProfileImage: null,
    });

    alert("Data berhasil diubah");
    history.push("/user");
  };

  return (
    <div className="flex flex-1 flex-col">
      <LabelContainer onClick={() => history.push("/user")}>
        <span className="flex items-center justify-center space-x-4 cursor-pointer">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
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
          </span>
          <span className="text-4xl font-light">Pengaturan &gt; Profil</span>
        </span>
      </LabelContainer>
      <form type="post" onSubmit={handleSubmit}>
        <LabelContainer>
          <div className="flex flex-col flex-1 space-y-2">
            <div className="mb-4">USERNAME</div>
            <UserFormInput
              type="text"
              name="username"
              label="Username sekarang"
              value={displayName}
              required
              clean
              disabled
            />
            <UserFormInput
              type="text"
              name="firstName"
              label="First name"
              value={firstName}
              required
              handleChange={handleChange}
            />
            <UserFormInput
              type="text"
              name="lastName"
              label="Last name"
              value={lastName}
              required
              handleChange={handleChange}
            />
          </div>
        </LabelContainer>
        <LabelContainer>
          <div className="flex flex-col flex-1 space-y-2">
            <div className="mb-4">FOTO PROFILE</div>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-80 w-80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
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
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-80 w-80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
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
              name="address"
              label="Alamat lengkap"
              value={address}
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
              name="oldPassword"
              label="Password lama"
              value={oldPassword}
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
              <button className="bg-green-300 px-4 py-6">
                BUANG PERUBAHAN
              </button>
            </div>
            <div>
              <button type="submit" className="bg-yellow-300 px-4 py-6">
                KONFIRMASI PERUBAHAN
              </button>
            </div>
          </div>
        </LabelContainer>
      </form>
    </div>
  );
};

export default withRouter(ProfilePage);

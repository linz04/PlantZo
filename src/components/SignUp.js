import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import axios from "axios";
import jwt from "jwt-decode";

import FormInput from "./FormInput";

import { signInWithGoogle } from "../lib/firebase/firebase.utils";
import { setCurrentUser } from "../redux/user/user.actions";

const SignUp = ({ history }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsConditions: false,
  });

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    termsConditions,
  } = user;

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { password, confirmPassword } = user;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    axios.post("api/signup", { user }).then((res) => {
      setUser({
        ...user,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsConditions: false,
      });

      if (res.data === "User Already Exist!") {
        alert(res.data);
      } else {
        const { display_name, email } = res.data.result;
        dispatch(
          setCurrentUser({
            displayName: display_name,
            email,
          })
        );

        history.push("/shop");
      }
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleCheckbox = () => {
    setUser({ ...user, termsConditions: !termsConditions });
  };

  const handleGoogleSignIn = () => {
    history.push("/shop");
  };

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center bg-gray-600 text-center h-1/2 relative w-1/2 lg:w-1/4">
        <div className="p-10 w-full">
          <h2 className="uppercase text-3xl font-medium mb-10">daftar</h2>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex-col justify-center items-center space-y-4"
          >
            <div className="flex space-x-4">
              <FormInput
                type="text"
                name="firstName"
                placeholder="Nama awal"
                value={firstName}
                required
                handleChange={handleChange}
              />
              <FormInput
                type="text"
                name="lastName"
                placeholder="Nama akhir"
                value={lastName}
                required
                handleChange={handleChange}
              />
            </div>
            <FormInput
              type="email"
              name="email"
              placeholder="Email/username"
              value={email}
              required
              handleChange={handleChange}
            />
            <FormInput
              type="password"
              name="password"
              placeholder="Kata sandi"
              value={password}
              required
              handleChange={handleChange}
            />
            <FormInput
              type="password"
              name="confirmPassword"
              placeholder="Konfirmasi kata sandi"
              value={confirmPassword}
              required
              handleChange={handleChange}
            />

            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsConditions"
                checked={termsConditions}
                required
                onChange={handleCheckbox}
              />
              <label className="ml-2 block text-sm">
                Saya setuju dengan
                <span className="text-white"> Persyaratan Penggunaan </span>&
                <span className="text-white"> Kebijakan Privasi.</span>
              </label>
            </div>

            <button
              type="submit"
              value="submit form"
              className="flex items-center justify-center bg-gray-300 text-gray-500 p-5 w-full rounded-full"
            >
              Daftar
            </button>
          </form>

          <div className="my-10">Atau</div>
          <button
            onClick={() => {
              signInWithGoogle();
              setTimeout(handleGoogleSignIn, 7000);
            }}
            className="flex justify-center items-center text-center bg-gray-300 text-gray-500 w-full p-4"
          >
            <span>Masuk dengan google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);

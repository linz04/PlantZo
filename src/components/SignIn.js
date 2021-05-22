import React, { useState } from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";
import jwt from "jwt-decode";

import FormInput from "./FormInput";

import { setCurrentUser } from "../redux/user/user.actions";

import { signInWithGoogle } from "../lib/firebase/firebase.utils";

const SignIn = ({ history }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("api/login", { user }).then((res) => {
      setUser({ ...user, email: "", password: "" });

      if (res.data.error === "Invalid username and password") {
        alert(res.data.error);
      } else {
        const encodeData = jwt(res.data);
        const { email, first_name, last_name } = encodeData.sub;
        dispatch(
          setCurrentUser({
            displayName: `${first_name} ${last_name}`,
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

  const handleGoogleSignIn = () => {
    history.push("/shop");
  };

  const { email, password } = user;

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center bg-gray-600 text-center h-full relative w-1/2 lg:w-1/4    ">
        <div className="p-10 w-full space-y-4">
          <h2 className="uppercase text-3xl font-medium mb-10">masuk</h2>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex-col justify-center items-center space-y-4"
          >
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

            <div className="flex justify-end underline text-gray-300">
              Lupa kata sandi?
            </div>

            <button
              type="submit"
              value="submit form"
              className="flex items-center justify-center bg-gray-300 text-gray-500 p-5 w-full rounded-full"
            >
              Masuk
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

          <div className="flex justify-center items-center text-gray-300">
            <span>Belum punya akun? </span>
            <span className="underline">Daftar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignIn);

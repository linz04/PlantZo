import React from "react";

import FormInput from "./FormInput";
import axios from "axios"

import { signInWithGoogle } from "../lib/firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    const user = {
      email,
      password,
    };

    axios.post("api/login", { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center bg-gray-600 text-center h-full relative w-1/2 lg:w-1/4    ">
          <div className="p-10 w-full space-y-4">
            <h2 className="uppercase text-3xl font-medium mb-10">masuk</h2>
            <form
              onSubmit={this.handleSubmit}
              method="post"
              className="flex-col justify-center items-center space-y-4"
            >
              <FormInput
                type="text"
                name="email"
                placeholder="Email/username"
                value={email}
                required
                handleChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                placeholder="Kata sandi"
                value={password}
                required
                handleChange={this.handleChange}
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
              onClick={signInWithGoogle}
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
  }
}

export default SignIn;

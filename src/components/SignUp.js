import React from "react";
import axios from "axios";

import FormInput from "./FormInput";

import { signInWithGoogle } from "../lib/firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsConditions: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      termsConditions,
    } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    const user = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      termsConditions,
    };

    axios.post("api/signup", { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsConditions: false,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckbox = () => {
    this.setState((prevState) => ({
      termsConditions: !prevState.termsConditions,
    }));
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      termsConditions,
    } = this.state;

    return (
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center bg-gray-600 text-center h-full relative w-1/2 lg:w-1/4">
          <div className="p-10 w-full">
            <h2 className="uppercase text-3xl font-medium mb-10">daftar</h2>
            <form
              onSubmit={this.handleSubmit}
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
                  handleChange={this.handleChange}
                />
                <FormInput
                  type="text"
                  name="lastName"
                  placeholder="Nama akhir"
                  value={lastName}
                  required
                  handleChange={this.handleChange}
                />
              </div>
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
              <FormInput
                type="password"
                name="confirmPassword"
                placeholder="Konfirmasi kata sandi"
                value={confirmPassword}
                required
                handleChange={this.handleChange}
              />

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="termsConditions"
                  value={termsConditions}
                  required
                  onClick={this.handleCheckbox}
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
              onClick={signInWithGoogle}
              className="flex justify-center items-center text-center bg-gray-300 text-gray-500 w-full p-4"
            >
              <span>Masuk dengan google</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;

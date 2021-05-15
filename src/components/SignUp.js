import React from "react";
import axios from "axios";

import FormInput from "./FormInput";

import { signInWithGoogle } from "../lib/firebase/firebase.utils";
import { withRouter } from "react-router";

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

    this.props.history.push("/shop");
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckbox = () => {
    this.setState((prevState) => {
      return { termsConditions: !prevState.termsConditions };
    });
  };

  handleGoogleSignIn = () => {
    this.props.history.push("/shop");
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
        <div className="flex flex-col justify-center items-center bg-gray-600 text-center h-1/2 relative w-1/2 lg:w-1/4">
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
                type="email"
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
                  checked={termsConditions}
                  required
                  onChange={this.handleCheckbox}
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
                window.setTimeout(this.handleGoogleSignIn, 7000);
              }}
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

export default withRouter(SignUp);

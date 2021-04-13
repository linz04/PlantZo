import React from "react";
import axios from "axios";

import FormInput from "./FormInput";

class Signup extends React.Component {
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
      <div className="">
        <h2>Title</h2>
        <form onSubmit={this.handleSubmit} method="post">
          <FormInput
            type="text"
            name="firstName"
            label="firstName"
            value={firstName}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="text"
            name="lastName"
            label="lastName"
            value={lastName}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="text"
            name="email"
            label="email"
            value={email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="confirmPassword"
            value={confirmPassword}
            required
            handleChange={this.handleChange}
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsConditions"
              className=""
              onClick={this.handleCheckbox}
            />
            <label>
              Saya setuju dengan Persyaratan Penggunaan & Kebijakan Privasi.
            </label>
          </div>

          <button
            type="submit"
            value="submit form"
            className="flex items-center justify-center bg-gray-800 text-gray-100 p-5 w-32"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;

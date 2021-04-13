import React from "react";

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
    } else {
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsConditions: false,
      });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
        <form onSubmit={this.handleSubmit} method="POST">
          <FormInput
            type="text"
            name="firstName"
            label="firstName"
            value={firstName}
            required
            handleChange={this.handleSubmit}
          />
          <FormInput
            type="text"
            name="lastName"
            label="lastName"
            value={lastName}
            required
            handleChange={this.handleSubmit}
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            required
            handleChange={this.handleSubmit}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="confirmPassword"
            value={confirmPassword}
            required
            handleChange={this.handleSubmit}
          />
          <FormInput
            type="text"
            name="firstName"
            label="firstName"
            value={firstName}
            required
            handleChange={this.handleSubmit}
          />

          <button type="submit" value="submit form">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;

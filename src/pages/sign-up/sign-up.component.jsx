import React from "react";
import { Link } from "react-router-dom";

import CustomCheckbox from "../../components/custom-checkbox/custom-checkbox.component";
import FormContainer from "../../components/form-container/form-container.component";
import FormInput from "../../components/form-input/form-input.component";
import ButtonRad from "../../components/button-rad/button-rad.component";
import ButtonSqu from "../../components/button-squ/button-squ.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkboxValue: false,
    };
  }

  handleSubmit = (event) => {
    const { password, confirmPassword, checkboxValue } = this.state;

    if (password === confirmPassword && checkboxValue) {
      event.preventDefault();

      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkboxValue: false,
      });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleClick = () => {
    this.setState((prevState) => ({ checkboxValue: !prevState.checkboxValue }));
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      checkboxValue,
    } = this.state;

    return (
      <FormContainer title="daftar">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="firstName"
            type="text"
            value={firstName}
            label="Nama awal"
            required
            isLittle
            handleChange={this.handleChange}
          />
          <FormInput
            name="lastName"
            type="text"
            value={lastName}
            label="Nama akhir"
            required
            isLittle
            handleChange={this.handleChange}
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            label="Email/username"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            label="Kata sandi"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            label="Konfirmasi kata sandi"
            required
            handleChange={this.handleChange}
          />
          <CustomCheckbox
            name="checkboxValue"
            value={checkboxValue}
            required
            handleClick={this.handleClick}
          >
            <div className="term-and-condition">
              Saya setuju dengan{" "}
              <Link className="link-blue" to="/persyaratan">
                Persyaratan Pengguna
              </Link>{" "}
              &{" "}
              <Link className="link-blue" to="/kebijakan">
                Kebijakan Privasi
              </Link>
            </div>
          </CustomCheckbox>
          <ButtonRad type="submit" value="Submit form">
            Daftar
          </ButtonRad>
          <span className="separate">Atau</span>
        </form>
        <ButtonSqu onClick={signInWithGoogle}>Masuk dengan Google</ButtonSqu>
      </FormContainer>
    );
  }
}

export default SignUpPage;

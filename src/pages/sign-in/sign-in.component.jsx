import React from "react";
import { Link } from "react-router-dom";

import FormContainer from "../../components/form-container/form-container.component";
import FormInput from "../../components/form-input/form-input.component";
import ButtonSqu from "../../components/button-squ/button-squ.component";
import ButtonRad from "../../components/button-rad/button-rad.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <FormContainer title="masuk">
        <form onSubmit={this.handleSubmit}>
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

          <Link className="link-bottom-line" to="/change-password">
            Lupa kata sandi?
          </Link>

          <ButtonRad type="submit" value="Submit form">
            Masuk
          </ButtonRad>

          <span className="separate">atau</span>
        </form>
        <ButtonSqu onClick={signInWithGoogle}>Masuk dengan Google</ButtonSqu>
        <div className="semi-footer">
          <span>Belum punya akun</span>
          <Link className="link-bottom-line" to="/signup">
            Daftar
          </Link>
        </div>
      </FormContainer>
    );
  }
}

export default SignInPage;

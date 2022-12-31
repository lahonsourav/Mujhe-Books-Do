import React from "react";
import "./Login.css";
import LOGU from "../../images/booklogo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={LOGU} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">Sign In</button>
        </form>
        <p>By signing in you agree to our privacy policy</p>
        <button className="login__registerButton" >Create new account</button>
      </div>
    </div>
  );
}

export default Login;

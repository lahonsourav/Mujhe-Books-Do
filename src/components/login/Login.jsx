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
            <h5></h5>
        </form>
      </div>
    </div>
  );
}

export default Login;

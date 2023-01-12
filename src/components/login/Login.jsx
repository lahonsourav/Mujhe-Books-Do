import React, { useState } from "react";
import "./Login.css";
import LOGU from "../../images/booklogo.png";
import { FcGoogle } from "react-icons/fc";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      console.log("login");
    }
  }, [user]);

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // Signed in
        console.log(auth);
        alert("You got your ID card");
        // ...
      })
      .catch((error) => {
        console.log(error.message);
        alert("ID is mismatching, wrong mail or password");
        // ..
      });
  };

  // from here
  const register = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // Signed in
        console.log(auth);
        alert("Your ID card is created, You are now logged in"); // ...
      })
      .catch((error) => {
        console.log(error.message);
        alert(
          "type your email and password on the boxes above, then click sign up"
        );
        // ..
      });
  };
  // to here

  if (loading) return <h1>Hey, you are Beautiful</h1>;

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={LOGU} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <button onClick={GoogleLogin} className="login__registerButton-google">
          Sign in with Google
          <div className="google__icon">
            <FcGoogle />
          </div>
        </button>
        <small>or</small>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <small>Don't have an account ! click sign up</small>
        <button onClick={register} className="login__registerButton">
          Sign Up
        </button>
      </div>

      <small>Click Sign in with Google for oneclick login</small>
    </div>
  );
};

export default Login;

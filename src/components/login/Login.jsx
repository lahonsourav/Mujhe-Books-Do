import React, { useState } from "react";
import "./Login.css";
import LOGU from "../../images/booklogo.png";

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
        console.log(auth); // ...
      })
      .catch((error) => {
        console.log(error.message);
        // ..
      });
  };

  // from here
  const register = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // Signed in
        console.log(auth); // ...
      })
      .catch((error) => {
        console.log(error.message);
        // ..
      });
  };
  // to here

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={LOGU} alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
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
        <p>By signing in you agree to our privacy policy</p>
        <button onClick={GoogleLogin} className="login__registerButton">
          Sign in with Google
        </button>

        <button onClick={register} className="login__registerButton">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;

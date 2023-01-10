import userEvent from "@testing-library/user-event";
import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Error.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UNDER from "../../images/under.jpg";

const Error = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);



  return (
    <div className="dashboard">
      <div className="user__details">
        <img className="user__image" src={UNDER} alt="" />
      </div>
      <p>Webpage under construction</p>
      <div className="logOutButton"></div>

      <div className="error__message">
        <small>I am working on the database of the website</small>
      </div>

      <div to="/dashboard" className="logout__button">
        Go Back
      </div>
    </div>
  );
};

export default Error;

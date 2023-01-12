import userEvent from "@testing-library/user-event";
import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Error.css";
import { Link, useNavigate } from "react-router-dom";
import UNDER from "../../images/under.jpg";
import QR from "../../images/qr.jpg";

const Error = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <h1>Hey, you are Beautiful</h1>;

  return (
    <div className="dashboard">
      <div className="user__details">
        <img className="user__image" src={UNDER} alt="" />
      </div>
      <p>We are Working</p>
      <div className="logOutButton"></div>

      <div className="error__message">
        <p>
          Sorry {user?.displayName}, no real orders! I am trying to make the
          physical delivery of Products soon, meanwhile, you can buy me a coffee
          by scanning the QR code below.
        </p>
      </div>

      <img className="qr__image" src={QR} alt="" />

      <Link to="/dashboard" className="logout__button">
        Go Back
      </Link>
    </div>
  );
};

export default Error;

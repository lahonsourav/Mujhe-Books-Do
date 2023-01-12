import userEvent from "@testing-library/user-event";
import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Dashboard.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserOption from "./UserOption";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  //need to insert if not user route to log in page

  if (loading) return <h1>Hey, you are Beautiful</h1>;
  if (!user) {
    navigate("/");
  }

  return (
    <div className="dashboard">
      <div className="user__details">
        <img className="user__image" src={user.photoURL} alt="" />
      </div>
      <h1>{user.displayName} </h1>
      <small>Hello {user.displayName}, Welcome to 'Mujhe Books Do'</small>
      <div className="logOutButton"></div>

      <div className="user__options">
        <UserOption />
      </div>

      <button className="logout__button" onClick={() => auth.signOut()}>
        Log out
      </button>
    </div>
  );
};

export default Dashboard;

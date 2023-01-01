import userEvent from "@testing-library/user-event";
import React from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Dashboard.css";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  //need to insert if not user route to log in page

  if (loading) return <h1>You are entering your Library </h1>;
  if (!user) {
    navigate("/");
  }

  return (
    <div className="dashboard">
      <h1>Welcome {user.displayName} to your Library</h1>
      <button onClick={() => auth.signOut()}>Log out</button>
    </div>
  );
};

export default Dashboard;

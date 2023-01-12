import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { div, Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./AccountPage.css";

const AccountPage = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <h1>Hey, you are Beautiful</h1>;

  return (
    <div className="account">
      <div className="account__details">
        <img className="account__image" src={user.photoURL} alt="" />
        <h1>{user.displayName} </h1>
        <small>manage your account here</small>
      </div>

      <div className="account__options">
        <div to="/error" className="account__option">
          <div className="account__option__info">
            <p> Name and E-mail</p>
            <p className="account__desc__name">{user?.displayName}</p>
            <p className="account__desc__name">{user?.email}</p>
          </div>
        </div>
        <div to="/accountPage" className="account__option">
          <div className="account__option__info">
            <p> Your Address</p>
            <p className="account__desc__name">
              {" "}
              We are not collecting user's address and personal details <br />{" "}
              These options will be availble when we start delivery process.
            </p>
          </div>
        </div>
        <div to="/error" className="account__option">
          <div className="account__option__info">
            <p> Payment Options</p>
            <p className="account__desc__name">
              {" "}
              Currently we are only allowing demo purchases with Pay on Delivery
              option, The demo purchases will be converted into discount coupons
              once we begin product delivery.
            </p>
          </div>
        </div>
        <Link to="/about" className="account__option">
          <div className="account__option__info">
            <p> Password and Deletion</p>
            <p className="account__desc__name">
              {" "}
              you can request password change Link and Account Deletion
              by clicking here and contacting us directly.
            </p>
          </div>
        </Link>
      </div>

      <button className="logout__button" onClick={() => auth.signOut()}>
        Log out
      </button>
    </div>
  );
};

export default AccountPage;

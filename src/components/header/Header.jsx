import React from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import LOGO from "../../images/booklogo.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateprovider/StateProvider";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import Search from "../search/Search";

const Header = () => {
  const [user, loading] = useAuthState(auth);

  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={LOGO} alt="logo" />
      </Link>

      <Search/>

      <div className="header__nav">
        <Link to="/sell">
          <div className="header__option">
            <span className="header__optionLineOne">I want to</span>
            <span className="header__optionLineTwo">Sell Book</span>
          </div>
        </Link>
        <Link to="/about">
          <div className="header__option">
            <span className="header__optionLineOne">About site</span>
            <span className="header__optionLineTwo">Know more</span>
          </div>
        </Link>
        {!user && (
          <Link to="/login">
            <div className="header__option__login">
              <span className="header__optionLineOne">My profile</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>
        )}

        {user && (
          <Link to="/dashboard">
            <div className="header__option__signed">
              <img
                referrerPolicy="no-referrer"
                className="avatar_image"
                src={user.photoURL}
                alt="user image"
              />
            </div>
          </Link>
        )}

        <Link to="/checkout">
          <div className="header__optionbasket">
            <SlBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./NavMobile.css";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import LOGO from "../../images/booklogo.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateprovider/StateProvider";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Header = () => {
  const [user, loading] = useAuthState(auth);

  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="nav__mobile">
      <div className="nav__mobile-header__nav">
        <Link to="/sell">
          <div className="nav__mobile-header__option">
            <span className="nav__mobile-header__optionLineOne">I want to</span>
            <span className="nav__mobile-header__optionLineTwo">Sell Book</span>
          </div>
        </Link>
        <Link to="/about">
          <div className="nav__mobile-header__option">
            <span className="nav__mobile-header__optionLineOne">
              About site
            </span>
            <span className="nav__mobile-header__optionLineTwo">Know more</span>
          </div>
        </Link>

        <Link to="/about">
          <div className="nav__mobile-header__option__connect">
            <span className="nav__mobile-header__optionLineOne">
              Connect with us
            </span>
            <span className="nav__mobile-header__optionLineTwo">
              Contact Us
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

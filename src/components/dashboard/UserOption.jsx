import React from "react";
import "./UserOption.css";
import ORDERS from "../../images/orders.jpg";
import LOCK from "../../images/lock.jpg";
import PAY from "../../images/payment.jpg";
import CON from "../../images/contact.jpg";

import { Link } from "react-router-dom";

const UserOption = () => {
  return (
    <>
      <Link to="/error" className="user__option">
        <img src={ORDERS} alt="" />
        <div className="user__option__info">
          <p> Your Orders</p>
          <p className="user__desc__name"> Track, return or buy things again</p>
        </div>
      </Link>
      <Link to="/accountPage" className="user__option">
        <img src={LOCK} alt="" />
        <div className="user__option__info">
          <p> Account and Security</p>
          <p className="user__desc__name"> Edit login details</p>
        </div>
      </Link>
      <Link to="/accountPage" className="user__option">
        <img src={PAY} alt="" />
        <div className="user__option__info">
          <p> Payment Options</p>
          <p className="user__desc__name"> Edit or add payment methods</p>
        </div>
      </Link>
      <Link to="/about" className="user__option">
        <img src={CON} alt="" />
        <div className="user__option__info">
          <p> Contact Us</p>
          <p className="user__desc__name"> Customer support and help</p>
        </div>
      </Link>
    </>
  );
};

export default UserOption;

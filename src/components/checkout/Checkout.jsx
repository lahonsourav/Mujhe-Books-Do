import React from "react";
import "./Checkout.css";
import CHARITY from "../../images/charity.png";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={CHARITY} alt="10% charity image" />
        <div>
          <h2 className="checkout__title">Your Bookshelf</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import { getBasketTotal } from "../stateprovider/reducer";
import { useStateValue } from "../stateprovider/StateProvider";
import "./Order.css";
import CONFIRM from "../../images/confirm.gif";

const Order = () => {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="orders">
      <div className="image__container">
        <img src={CONFIRM} alt="" />
      </div>
      <h3>Order Confirmation for {user?.displayName} </h3>
      <h4>
        <CurrencyFormat
          renderText={(value) => (
            <p>
              Your Order ID is "M<strong>{value}</strong>
              {user?.displayName[4]}BD"
            </p>
          )}
          decimalState={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeperator={true}
        />
      </h4>
      <p>
        You've succesfully purchased {basket?.length} items from "Mujhe Books
        Do"
      </p>
      <div className="payment__priceContainer">
        <CurrencyFormat
          renderText={(value) => (
            <p>
              worth <strong> {value}</strong> only
            </p>
          )}
          decimalState={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeperator={true}
          prefix={"₹"}
        />
      </div>
      <p>The invoice will be sent to {user?.email}</p>
      <Link to="/" className="continue">
        <p>Continue Searching Books</p>
      </Link>
    </div>
  );
};

export default Order;

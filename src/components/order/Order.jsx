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

  const goBack = async (event) => {
    event.preventDefault();
    navigate("/", { replace: true });

    dispatch({
      type: "EMPTY_BASKET",
    });
  };
  return (
    <div className="orders">
      <div className="image__container">
        <img src={CONFIRM} alt="" />
      </div>
      <h3>Order Confirmation for {user?.displayName} </h3>
      <h4>
        <CurrencyFormat
          renderText={(value) => (
            <p className="order__id">
              Your Order ID is "M{value}
              {user?.displayName[4]}BD"
              {/* {user?.uid} */}
            </p>
          )}
          decimalState={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeperator={true}
        />
      </h4>
      <p className="order__text">
        You've succesfully purchased {basket?.length} books
      </p>
      <div className="payment__priceContainer">
        <CurrencyFormat
          renderText={(value) => (
            <p className="order__text">
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
      <div className="order__text__container">
        <p className="order__text">
          This purchase will be converted into discount coupon once we begin
          product delivery, Your reference ID is "{basket.length}
          {user?.uid}", The invoice will be sent to {user?.email}
        </p>
      </div>
      <button onClick={goBack} className="continue">
        <p>Continue Searching Books</p>
      </button>
    </div>
  );
};

export default Order;

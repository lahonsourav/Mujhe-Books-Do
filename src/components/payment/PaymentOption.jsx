import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./PaymentOption.css";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const PaymentOption = () => {
  return (
    <div className="payment__options">
      <div className="payment__option__container">
        <div
          onClick={() => {
            alert("Select Pay on Delivery\nother options not available");
          }}
          className="payment__option"
        >
          <p>Internet Banking</p>
          <MdError className="payment__methodIcon" />
        </div>
        <div
          onClick={() => {
            alert("Select Pay on Delivery\nother options not available");
          }}
          className="payment__option"
        >
          <p>Credit and Debit Card</p>
          <MdError className="payment__methodIcon" />
        </div>
        <div
          onClick={() => {
            alert("Please select Pay on Delivery\nother options not available");
          }}
          className="payment__option"
        >
          <p>Wallet</p>
          <MdError className="payment__methodIcon" />
        </div>
        <Link to='/order'
          //   onClick={() => {
          //     alert("Click Proceed to Pay");
          //   }}
          className="payment__option"
        >
          <p>Pay on Delivery</p>
          <BsFillCheckCircleFill className="payment__methodIcon" />
        </Link>
        {/* <div className="payment__option__button">
          <button>Proceed and Order</button>
        </div> */}
      </div>
    </div>
  );
};

export default PaymentOption;

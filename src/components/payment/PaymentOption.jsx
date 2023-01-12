import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./PaymentOption.css";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../stateprovider/StateProvider";
import { db } from "../../firebase";

const PaymentOption = () => {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  const payDel = async (e) => {
    e.preventDefault();
    dispatch({
      type: "EMPTY_BASKET",
    });
    navigate("/order", { replace: true });
  };

  return (
    <div className="payment__options">
      <div className="payment__option__container">
        <div
          onClick={() => {
            alert("Select Pay on Delivery\nother options not available");
          }}
          className="payment__option"
        >
          <p>Scan QR code</p>
          <MdError className="payment__methodIcon" />
        </div>

        <div
          onClick={() => {
            alert("Please select Pay on Delivery\nother options not available");
          }}
          className="payment__option"
        >
          <p>Internet Banking</p>
          <MdError className="payment__methodIcon" />
        </div>
        <div onClick={payDel} className="payment__option">
          <p>Pay on Delivery</p>
          <BsFillCheckCircleFill className="payment__methodIcon" />
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;

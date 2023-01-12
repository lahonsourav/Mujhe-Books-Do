import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./PaymentOption.css";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../stateprovider/StateProvider";
import { db } from "../../firebase";

const PaymentOption = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));



  const payDel = async (e) => {
    setShowMessage(true);

    e.preventDefault();
    await delay(1500);

    navigate("/order", { replace: true });
  };

  if (!showMessage) {
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
              alert(
                "Please select Pay on Delivery\nother options not available"
              );
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
  }

  setTimeout(() => {
    setShowMessage(false);
  }, 1500);

  return (
    <div className="payment__options">
      <div className="payment__option__container">
        <div className="payment__option">
          <p>Making your Purchase</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOption;

import React from "react";
import "./allLanding.css";
import WINGS from "../../BookImages/wings.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={WINGS} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> Wings of fire</p>
            <p className="landing__author__name"> APJ Abdul Kalam</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>150</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              Wings of Fire is the autobiography of the former President of
              India, Dr. Abdul Kalam. Kalam went from being a humble boy in
              South India to developing India's nuclear weapons and becoming
              President. Through this autobiography, the reader gains a glimpse
              into pre-partition India
            </small>
            <br />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

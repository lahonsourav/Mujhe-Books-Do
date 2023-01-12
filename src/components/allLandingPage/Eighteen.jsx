import React from "react";
import "./allLanding.css";
import CHEMONE from "../../BookImages/chemone.webp";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={CHEMONE} alt="" />

          <a href="javascript:void(0)"  className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> Handbook of Chemistry</p>
            <p className="landing__author__name"> Arihant</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>188</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              Handbook of Chemistry is an important, useful and compact
              reference book suitable for everyday study, problem solving or
              exam revision for class XI – XII.
            </small>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

import React from "react";
import "./allLanding.css";
import MTGONE from "../../BookImages/mtgone.webp";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={MTGONE} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> 21 years JEE main PYQ</p>
            <p className="landing__author__name"> MTG</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>449</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              MTG's 21 Years JEE Main Chapter-wise provides the JEE Main
              aspirants with an exhaustive practice through its chapter-wise
              topic-wise arranged questions
            </small>
            <br />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

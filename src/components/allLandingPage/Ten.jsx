import React from "react";
import "./allLanding.css";
import NEH from "../../BookImages/neh.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={NEH} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> অসীমত যাৰ সীমা নেহেৰায়</p>
            <p className="landing__author__name"> প্ৰণৱ কুমাৰ শৰ্মা</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>1</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>অসীমত যাৰ হেৰাল সীমা in parrallel Universe</small>
            <br />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target='_blank' >
              Read Summary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

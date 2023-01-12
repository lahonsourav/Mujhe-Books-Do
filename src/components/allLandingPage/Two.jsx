import React from "react";
import "./allLanding.css";
import SECRET from "../../BookImages/secret.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={SECRET} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> The Secret</p>
            <p className="landing__author__name"> Rhonda Byrne</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>799</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              he Secret is a self-help book by Rhonda Byrne that explains how
              the law of attraction, which states that positive energy attracts
              positive things into your life, governs your thinking and actions,
              and how you can use the power of positive thinking to achieve
              anything you can imagine.
            </small>
            <br />
            <small>
              Rhonda Byrne is the creator of The Secret, a documentary film that
              swept the world in 2006, changing millions of lives and igniting a
              global movement. Later that same year, Rhonda’s book of The Secret
              was released. It has been translated into more than fifty
              languages and remains one of the longest-running bestsellers of
              this century. Rhonda has written three more bestselling books: The
              Power in 2010, The Magic in 2012, and Hero in 2013.
            </small>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

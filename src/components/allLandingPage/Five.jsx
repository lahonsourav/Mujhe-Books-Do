import React from "react";
import "./allLanding.css";
import PRIDE from "../../BookImages/pride.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={PRIDE} alt="" />

          <a href="javascript:void(0)"  className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> Pride and Prejudice</p>
            <p className="landing__author__name"> Jane Austen</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>99</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              Pride and Prejudice follows the turbulent relationship between
              Elizabeth Bennet, the daughter of a country gentleman, and
              Fitzwilliam Darcy, a rich aristocratic landowner. They must
              overcome the titular sins of pride and prejudice in order to fall
              in love and marry.
            </small>
            <br />
            <a href="https://www.google.com/search?q=synopsis+of+Pride+and+Prejudice&rlz=1C1ONGR_enIN1016IN1016&sxsrf=AJOqlzX_tO5S5lPZBqrSEADunlyVcGevDg%3A1673375541497&ei=Na-9Y7GDHuLh4-EP4sKXwAI&ved=0ahUKEwjx8efV0b38AhXi8DgGHWLhBSgQ4dUDCA8&uact=5&oq=synopsis+of+Pride+and+Prejudice&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46CggAEEcQ1gQQsAM6BAgjECc6BAgAEEM6BQgAEJECSgQIQRgASgQIRhgAUOwHWNMWYMIXaAFwAXgAgAGDAogBpwWSAQUwLjEuMpgBAKABAaABAsgBCMABAQ&sclient=gws-wiz-serp" target='_blank' >
              Read Summary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

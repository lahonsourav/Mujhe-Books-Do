import React from "react";
import "./allLanding.css";
import TRAIN from "../../BookImages/train.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={TRAIN} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> Train to Pakistan</p>
            <p className="landing__author__name"> Khushwant Singh </p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>120</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              In this classic novel, Khushwant Singh tells about Sikhs and
              Muslims who lived together in peace for hundreds of years. The
              novel is based on the Hindu-Muslim riots of 1947 which followed
              the partition of India. This novel depicts the bitter and dirty
              truth of Indian independence, which we call division.
            </small>
            <br />
            <a href="https://www.google.com/search?q=synopsis+of+Train+to+Pakistan&rlz=1C1ONGR_enIN1016IN1016&sxsrf=AJOqlzXwFrtEIs--JfHiq_NWgsVuMhxr0Q%3A1673376365501&ei=bbK9Y4-fHtqrz7sP8Y2CoA0&ved=0ahUKEwjPid3e1L38AhXa1XMBHfGGANQQ4dUDCA8&uact=5&oq=synopsis+of+Train+to+Pakistan&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIFCAAQhgMyBQgAEIYDMgUIABCGAzoKCAAQRxDWBBCwAzoECCMQJzoKCAAQgAQQhwIQFDoFCAAQkQJKBAhBGABKBAhGGABQhANYpQ1g7w9oAXAAeACAAakCiAHXB5IBAzItNJgBAKABAaABAsgBCMABAQ&sclient=gws-wiz-serp" target='_blank' >
              Read Summary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

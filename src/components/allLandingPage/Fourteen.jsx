import React from "react";
import "./allLanding.css";
import GREAT from "../../BookImages/great.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={GREAT} alt="" />

          <a href="javascript:void(0)"  className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> A Great Man</p>
            <p className="landing__author__name"> Kate Christensen</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>3242</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              Two competing biographers, both working to document the life and
              times of a man who made his fortune painting nude women, turn for
              information to the women who had shared his life: his wife, his
              mistress, and his sister, who is also a painter. Oscar Feldman was
              married to Abigail, the daughter of a rich Jewish family.
            </small>
            <br />
            <a href="https://www.google.com/search?q=synopsis+of+A+Great+Man&rlz=1C1ONGR_enIN1016IN1016&sxsrf=AJOqlzUlgxtFE3JhrqtG86IDtpxYo1IQXg%3A1673376511228&ei=_7K9Y4rODcGemgeWxoCYCQ&ved=0ahUKEwjKyZuk1b38AhVBj-YKHRYjAJMQ4dUDCA8&uact=5&oq=synopsis+of+A+Great+Man&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyCAghEBYQHhAdMggIIRAWEB4QHTIICCEQFhAeEB0yCAghEBYQHhAdMggIIRAWEB4QHToKCAAQRxDWBBCwA0oECEEYAEoECEYYAFDlBFjlBGDeCWgBcAF4AIABhgKIAYYCkgEDMi0xmAEAoAECoAEByAEIwAEB&sclient=gws-wiz-serp" target='_blank' >
              Read Summary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

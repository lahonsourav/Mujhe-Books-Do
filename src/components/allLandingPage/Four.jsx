import React from "react";
import "./allLanding.css";
import SEVEN from "../../BookImages/seven.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={SEVEN} alt="" />

          <a href="javascript:void(0)"  className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> History of 7 killings</p>
            <p className="landing__author__name"> Marlon James</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>499</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              Ostensibly A Brief History of Seven Killings is about the failed
              assassination of Bob Marley, immediately before a peace concert
              organised by the socialist People's National Party (PNP) in 1976.
              Marley was wounded but went on to play the concert. He left
              straight afterwards and did not return to Jamaica for two years.
            </small>
            <br />
            <a href="https://www.google.com/search?q=synopsis+of+History+of+7+killings&rlz=1C1ONGR_enIN1016IN1016&sxsrf=AJOqlzX_tO5S5lPZBqrSEADunlyVcGevDg%3A1673375541497&ei=Na-9Y7GDHuLh4-EP4sKXwAI&ved=0ahUKEwjx8efV0b38AhXi8DgGHWLhBSgQ4dUDCA8&uact=5&oq=synopsis+of+History+of+7+killings&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwAzIKCAAQRxDWBBCwA0oECEEYAEoECEYYAFAAWABg3wNoAXABeACAAQCIAQCSAQCYAQDIAQjAAQE&sclient=gws-wiz-serp" target='_blank' >
              Read Summary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

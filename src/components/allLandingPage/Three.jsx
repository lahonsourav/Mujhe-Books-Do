import React from "react";
import "./allLanding.css";
import IGNITED from "../../BookImages/ignited.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={IGNITED} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> Ignited minds</p>
            <p className="landing__author__name"> APJ Abdul Kalam</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>189</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              Ignited Minds is a book by Dr. APJ Abdul Kalam, the former
              President of India and also known as the Missile Man of India for
              his work in development of missiles and launch vehicles. In this
              book Dr. Kalam talks about his dream of developed India. The title
              of the book comes with a tag-line, “Unleashing the power within
              India”.
            </small>
            <br />
            <small>
              Continuing his theme of helping build a strong India, he exhorts
              on the need to attain a mindset of developed society, to 'realise
              its destiny as a developed nation'. And in his previous book,
              Vision 2020, Kalam had set out a blueprint for making India a
              'developed nation' by that year.
            </small>
            <br />
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4117111/#:~:text=Ignited%20Minds%20is%20a%20book,his%20dream%20of%20developed%20India." target='_blank' >
              Read Summary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

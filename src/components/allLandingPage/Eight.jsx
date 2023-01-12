import React from "react";
import "./allLanding.css";
import OIG from "../../BookImages/oig.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={OIG} alt="" />

          <a href="javascript:void(0)"  className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> One Indian Girl</p>
            <p className="landing__author__name"> Chetan Bhagat</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>130</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              Moving to the book then, One Indian Girl is a story of a girl
              called Radhika Mehta who is a hot-shot banker working in the
              prestigious Investment Bank, Goldman Sachs. Radhika, who once was
              as nerdy as one can be, is now arranged to get married to Brijesh
              Gulati and has just arrived for her destination wedding in Goa.
            </small>
            <br />
            <small>
              This paper attempts a feminist reading of Chetan Bhagat’s latest
              novel – “One Indian Girl”. The novel revolves around a female
              protagonist, Radhika Mehta, an IIMA product with a job at Goldman
              Sachs’ New York branch first, next at Hong Kong and last at U.K.
              Always branded a nerd, she begins to explore her sexuality once
              she lands in alien territory in a vain search for positive
              external valuation. She finally succumbs to parental pressure for
              undergoing an arranged marriage. However, just before the wedding,
              she realises that she must live life on her own terms and refuses
              to marry. She takes time off to understand her true self more
              deeply and at the end of the novel realises that the ideal husband
              for her is one who will accommodate a woman’s conflicting demands
              for the freedom to soar high in her career while being a
              supportive wife and doting mother at home. While the narration
              traces a woman’s journey towards confidence and self-respect, it
              also exposes the hypocrisy of the Indian male and the sexist
              attitudes ingrained into cultures.
            </small>
            <br />
            <a href="https://www.ipl.org/essay/One-Indian-Girl-Summary-PJC7VN5SQU" target='_blank' >
              Read Summary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

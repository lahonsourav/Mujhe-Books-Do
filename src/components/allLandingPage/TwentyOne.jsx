import React from "react";
import "./allLanding.css";
import CHEMTHREE from "../../BookImages/chemthree.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={CHEMTHREE} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> Chemistry Problem</p>
            <p className="landing__author__name"> Wiley Editorial</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>690</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              Wiley Chemistry Problem Book covers the complete chemistry course
              for JEE (Physical, Organic and Inorganic). It is focused on the
              development of problem-solving skills in JEE aspirants. The
              chapter flow of the book is closely aligned with the JEE (Main)
              syllabus and its coverage in the classroom. However, the topics
              required for JEE (Advanced) are also covered. The problems
              presented, systematically cover all important concepts pertaining
              to the topic and the possible questions that can be framed on
              them.
            </small>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

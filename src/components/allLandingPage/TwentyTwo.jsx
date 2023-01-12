import React from "react";
import "./allLanding.css";
import ENGPHY from "../../BookImages/ENGPHY.webp";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={ENGPHY} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> Engineering Physics</p>
            <p className="landing__author__name"> HK Malik</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>799</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              Engineering Physics, 2e, provides a comprehensive overview of the
              subject for first year engineering students. It provides an
              excellent coverage of the syllabus for all major universities. The
              book emphasizeson tutorial approach (teach-by-example) towards the
              subject. Ample solved examples and rich pedagogical pool will help
              the students understand the subject matter and prepare them for
              the questions asked inexamination.
            </small>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

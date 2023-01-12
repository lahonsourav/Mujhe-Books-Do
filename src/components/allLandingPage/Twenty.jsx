import React from "react";
import "./allLanding.css";
import CHEMTWO from "../../BookImages/chemtwo.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={CHEMTWO} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> General Organic Chemistry</p>
            <p className="landing__author__name"> Disha Publications</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>140</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              The book is written with the Mains that, “Rather than memorising
              mechanisms, the student should be able to ‘workthrough’ the
              mechanisms based on previous knowledge.” The book General Organic
              Chemistry for JEE Main & Advanced covers Classification &
              Nomenclature, Stereochemistry, Reactions & their mechanisms and
              General organic chemistry which forms the core of the Organic
              Chemistry. Some of the salient features of the revised edition
              are: • The book aims at 100% Concept Clarity for the students. The
              theory is followed by in-chapter Exercises (Test Your
              Understanding), Illustrative Examples and 3 levels of Exercises. •
              The first exercise is based on Mains exam covering single choice
              correct MCQs. • The second exercise covers questions on the NEW
              PATTERN of IIT-JEE MCQs (more than 1 correct), Passages, Multiple
              Matching, Integer Answer and Assertion-Reason Type questions. •
              More focus on questions based on concepts repeatedly asked in the
              exam. • The final exercise covers quality subjective questions. •
              The book provides solutions to most of the questions.
            </small>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

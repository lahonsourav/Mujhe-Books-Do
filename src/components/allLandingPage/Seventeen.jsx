import React from "react";
import "./allLanding.css";
import CONPHY from "../../BookImages/conphy.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={CONPHY} alt="" />

          <a
            href="https://medicalstudyzone.com/concept-of-physics-hc-verma-book-pdf-free-download/" target='_blank' 
            className="addButton"
          >
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> Concept of Physics</p>
            <p className="landing__author__name">HC Verma</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>399</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              This book is important for IIT JEE and AIEEE aspirants. The
              concepts are given in a concise and easy format to make it very
              easy to grasp.The book has the clear concepts of physics in basics
              thoroughly. This book is cover conceptions about
              physics,challenging numericals which boosts your thinking
              capability & if you are an engineering aspirant then this book is
              a must buy. It helped to analyse problems in much more logical way
              without over thinking it. This book shows you how to apply physics
              in various problems.
            </small>
            <br />
            <a href="https://medicalstudyzone.com/concept-of-physics-hc-verma-book-pdf-free-download/">
              Get PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

import React from "react";
import "./allLanding.css";
import ARONE from "../../BookImages/ARONE.webp";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={ARONE} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> Handbook of Physics</p>
            <p className="landing__author__name"> Arihant</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>210</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              Physics of higher level has too many concept and remembering all
              them on tips all the time is not an easy task. Handbook of Physics
              is an important, useful and compact reference book suitable for
              everyday study, problem solving or exam revision for class XI XII,
              Engineering Medical entrances and other Competitions Aspirants.
              This book is a multi-purpose quick revision resource that contains
              almost all key notes, terms, Definitions and formulae that all
              students professionals in physics will want to have this essential
              reference book within easy reach. Its unique format displays
              formulae clearly, places them in the context and crisply
              identifies describes all the variables involved, summary about
              every equation and formula that one might want while learning
              physics is one of the unique features of the book, a stimulating
              and crisp extract of fundamental physics is to be enjoyed by the
              beginners and experts equally. The book is from its first edition
              and one of the most useful books of its type. Table of contents
              Measurement, Vectors, Motion in a Straight Line, Projectile Motion
              and Circular Motion, Laws of Motion, Work, Power and Energy,
              Rotational Motion, Gravitation, Elasticity, Hydrostatics,
              Hydrodynamics, Surface Tensions, Thermometry and Calorimetry,
              Kinetic Theory of Gases, Thermodynamics, Transmission of Heat,
              Oscillations, Waves and Sound, Electrostatics, Current
              Electricity, Heating and Chemical Effects of Currents, Magnetic
              Effect of Current, Magnetism, Electromagnetic Induction,
              Alternating Currents, Ray Optics, Wave Optics, Electrons, Photons
              and X-rays, Atomic Physics, Nuclear Physics, Electronics,
              Electromagnetic Waves and Communication, Universe, Basic Formulae
              of Physics, Nobel Laureates in Physics, Famous Physicists and
              their Contributions.
            </small>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

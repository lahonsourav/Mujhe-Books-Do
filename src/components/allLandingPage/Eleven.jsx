import React from "react";
import "./allLanding.css";
import LORD from "../../BookImages/lord.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={LORD} alt="" />

          <a href="javascript:void(0)"  className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> Lord of the Rings</p>
            <p className="landing__author__name"> J.R.R. Tolkien</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>649</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              The Lord of the Rings, fantasy novel by J.R.R. Tolkien initially
              published in three parts as The Fellowship of the Ring (1954), The
              Two Towers (1955), and The Return of the King (1955). The novel,
              set in the Third Age of Middle-earth, formed a sequel to Tolkien’s
              The Hobbit (1937) and was succeeded by his posthumous The
              Silmarillion (1977). The Lord of the Rings is the saga of a group
              of sometimes reluctant heroes who set forth to save their world
              from consummate evil. Its many worlds and creatures were drawn
              from Tolkien’s extensive knowledge of philology and folklore.
            </small>
            <br />
            <a href="https://www.britannica.com/topic/The-Lord-of-the-Rings" target='_blank' >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

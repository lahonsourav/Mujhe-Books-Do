import React from "react";
import "./allLanding.css";
import INTRO from "../../BookImages/intro.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={INTRO} alt="" />

          <a
            href="https://sd.blackball.lv/library/Introduction_to_Algorithms_Third_Edition_(2009).pdf"
            className="addButton"
            target="_blank"
          >
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> Intro to Algorithms</p>
            <p className="landing__author__name"> Thomas Cormen</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>200</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              A new edition of the essential text and professional reference,
              with substantial new material on such topics as vEB trees,
              multithreaded algorithms, dynamic programming, and edge-based
              flow. Some books on algorithms are rigorous but incomplete; others
              cover masses of material but lack rigor. Introduction to
              Algorithms uniquely combines rigor and comprehensiveness. The book
              covers a broad range of algorithms in depth, yet makes their
              design and analysis accessible to all levels of readers. Each
              chapter is relatively self-contained and can be used as a unit of
              study. The algorithms are described in English and in a pseudocode
              designed to be readable by anyone who has done a little
              programming. The explanations have been kept elementary without
              sacrificing depth of coverage or mathematical rigor. The first
              edition became a widely used text in universities worldwide as
              well as the standard reference for professionals. The second
              edition featured new chapters on the role of algorithms,
              probabilistic analysis and randomized algorithms, and linear
              programming. The third edition has been revised and updated
              throughout. It includes two completely new chapters, on van Emde
              Boas trees and multithreaded algorithms, substantial additions to
              the chapter on recurrence (now called Divide-and-Conquer), and an
              appendix on matrices. It features improved treatment of dynamic
              programming and greedy algorithms and a new notion of edge-based
              flow in the material on flow networks. Many new exercises and
              problems have been added for this edition. The international
              paperback edition is no longer available; the hardcover is
              available worldwide.
            </small>
            <br />
            <a
              href="https://sd.blackball.lv/library/Introduction_to_Algorithms_Third_Edition_(2009).pdf"
              target="_blank"
            >
              Get PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

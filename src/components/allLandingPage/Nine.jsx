import React from "react";
import "./allLanding.css";
import AXIMOT from "../../BookImages/aximot.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={AXIMOT} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> অসীমত যাৰ হেৰাল সীমা</p>
            <p className="landing__author__name"> কাঞ্চন বৰুৱা</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>300</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              The novel starts with the narrator, a clerk dreaming of a perfect
              married life with kids, who suddenly gets sucked into a black
              hole. He wakes up startled to realize that he is supposed to go on
              an expedition that very day with his four friends - a professor, a
              doctor, a poet, and a clerk, much like the narrator himself. The
              five friends want to leave the humdrum of their routine life for a
              month and embark on a boat journey along the river Dihing in the
              hopes of coming across an unexplored land. After moving upstream
              on their boat for 15 days they unexpectedly come across a tribe of
              aboriginals in the dense jungles. After feasting and spending the
              night with the tribe, the next morning they face the revolt of
              their boatman and navigators who believe any journey further
              upstream will bring doom upon them all as the place is cursed. But
              the stubborn friends decide to continue the journey on their own.
              As they travel further, they are astounded by the breathtaking
              scenery at first, but as the night falls they are stuck in a
              violent rainstorm that takes them off course. Once the storm
              subsides they realize that their Professor friend is disoriented
              and sick and seems to be zoning in and out of his memories of his
              homeland from his previous birth, 1300 years ago. This is where
              the main story starts. It is a story of love, life, friendship,
              patriotism, and valor.
            </small>
            <br />
            <a
              href="https://www.axomiyakobita.in/2021/08/asimat-jar-heral-seema-assamese-novel.html"
              target="_blank"
            >
              Read Summary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

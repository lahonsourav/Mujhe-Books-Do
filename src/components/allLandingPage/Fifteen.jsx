import React from "react";
import "./allLanding.css";
import ANGEL from "../../BookImages/angel.webp";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={ANGEL} alt="" />

          <a href="javascript:void(0)"  className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> Angels and Demons</p>
            <p className="landing__author__name"> Dan Brown</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>499</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              Following the murder of a physicist, Father Silvano Bentivoglio, a
              symbolist, Robert Langdon, and a scientist, Vittoria Vetra, are on
              an adventure involving a secret brotherhood, the Illuminati. Clues
              lead them all around the Vatican, including the four altars of
              science, Earth, Air, Fire and Water.
            </small>
            <br />
            <a href="https://www.google.com/search?q=synopsis+of+Angels+and+Demons&rlz=1C1ONGR_enIN1016IN1016&sxsrf=AJOqlzXF2HVrIo1P8h4bZ78LplCxZjcndg%3A1673376515381&ei=A7O9Y_HxFv7Lz7sPjuiNwA4&ved=0ahUKEwix_5im1b38AhX-5XMBHQ50A-gQ4dUDCA8&uact=5&oq=synopsis+of+Angels+and+Demons&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgUIABCGAzoKCAAQRxDWBBCwAzoICAAQFhAeEA86BAgjECc6BQgAEJECSgQIQRgASgQIRhgAUOACWNsOYOYRaAFwAXgAgAH5AYgB0giSAQUwLjEuNJgBAKABAaABAsgBCMABAQ&sclient=gws-wiz-serp" target='_blank' >
              Read Summary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

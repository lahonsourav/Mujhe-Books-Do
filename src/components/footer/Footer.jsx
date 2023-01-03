import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="content">
        <div class="left box">
          <div class="upper">
            <div class="topic">About us</div>
            <p>
              Mujhe Books Do is a website that deals with Buying and Selling
              Books online. You can sell or buy books from us with reasonable
              price.
            </p>
          </div>
          <div class="lower">
            <div class="topic">Contact us</div>
            <div class="phone">
              <a href="tel:+916001098923">+91 6001098923</a>
            </div>
            <div class="email">
              <a href="mailto:lahoncs@gmail.com">lahoncs@gmail.com</a>
            </div>
          </div>
        </div>
        <div class="middle box">
          <div class="topic">Jump to</div>
          <div className="links__to">
            <Link to="/sell">Sell your books</Link>
          </div>
          <div className="links__to">
            <Link to="/about">Know more about Us</Link>{" "}
          </div>
          <div className="links__to">
            <Link to="/login">Login/logout</Link>{" "}
          </div>
          <div className="links__to">
            <Link to="/checkout">Go to your Cart</Link>{" "}
          </div>
          <div className="links__to">
            <Link to="#">Privacy Policy</Link>{" "}
          </div>
          <div className="links__to">
            <Link to="#">Terms and Condition</Link>{" "}
          </div>
        </div>
        {/* <div class="right box">
          <div class="topic">Reach Us</div>
          <form action="#">
            <div class="media-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div> */}
      </div>
      <div class="bottom">
        <p>
          Copyright © 2023 <a href="#">Mujhe Books Do</a> All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

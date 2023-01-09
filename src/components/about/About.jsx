import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { useStateValue } from "../stateprovider/StateProvider";
import "./About.css";

const About = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="about">
      <div className="about__container">
        <h1>
          About <Link to="/checkout">"Mujhe Books Do"</Link>
        </h1>
        {/* Payment Section = delivery address */}
        <div className="about__section">
          <div className="about__title">
            <h3>About Website</h3>
          </div>
          <div className="about__address">
            <p>Greetings {user?.email}</p>
            <p>"Mujhe Books Do" deals with buying and selling of books,</p>
            <p>
              We buy books from our users and users can buy books from our site
            </p>
          </div>
        </div>

        <div className="about__section">
          <div className="about__title">
            <h3>About Website</h3>
          </div>
          <div className="about__address">
            <p>Greetings {user?.email}</p>
            <p>"Mujhe Books Do" deals with buying and selling of books,</p>
            <p>
              We buy books from our users and users can buy books from our site
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

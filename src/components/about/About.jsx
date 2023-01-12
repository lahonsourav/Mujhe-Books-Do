import React from "react";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { useStateValue } from "../stateprovider/StateProvider";
import "./About.css";

const About = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="about">
      <div className="about__container">
        <h1>
          About <Link to="/">"Mujhe Books Do"</Link>
        </h1>
        {/* Payment Section = delivery address */}
        <div className="about__section">
          <div className="about__title">
            <h3>About Website</h3>
          </div>
          <div className="about__address">
            <p>Greetings {user?.displayName}</p>

            <p>"Mujhe Books Do" deals with buying and selling of books,</p>

            <p>
              We buy books from our users and users can buy books from our site
            </p>
          </div>
        </div>

        <div className="about__section">
          <div className="about__title">
            <h3>References, Framework and Modules</h3>
          </div>
          <div className="about__address">
            <p>Framework: ReactJS__Facebook</p>

            <p>Log in authentication: Firebase__Google</p>

            <p>Card Payment Processing: Stripe</p>

            <p>Database: Firestore__Firebase</p>

            <p>Primary reference: Clever-Programmer__YouTube</p>

            <p>Footer component: ChatGPT__openAI</p>

            <p>Images: Designed in Canva</p>
          </div>
        </div>

        <div className="about__section">
          <div className="about__title">
            <h3>Connect with me</h3>
          </div>
          <div className="about__address">
            <a
              href="https://www.linkedin.com/in/sourav-lahon-413a48228/"
              target="_blank"
            >
              <BsLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/lahonsourav" target="_blank">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.instagram.com/la_h_on/" target="_blank">
              <BsInstagram /> Instagram
            </a>
            <a href="https://lahon.netlify.app" target="_blank">
              <SiAboutdotme /> Portfolio Page
            </a>
            <a href="mailto:lahoncs@gmail.com" target="_blank">
              <BiMailSend /> Send Mail
            </a>
            <a href="https://wa.me/+916000733022" target="_blank">
              <BsWhatsapp /> WhatsApp
            </a>
            <a href="tel:+916001098923" target="_blank">
              <FiPhoneCall /> Phone
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

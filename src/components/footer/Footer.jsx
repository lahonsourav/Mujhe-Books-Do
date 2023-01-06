import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import { CgProfile } from "react-icons/cg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>Copyright &copy; 2023 Mujhe Books Do</p>
        <ul className="social-links">
          <li>
            <a href="#">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="https://github.com/lahonsourav" target="_blank">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://lahon.netlify.app" target='_blank'>
              <CgProfile />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sourav-lahon-413a48228/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

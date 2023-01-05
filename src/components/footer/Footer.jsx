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
              <BsFacebook />{" "}
            </a>
          </li>
          <li>
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="https://github.com/lahonsourav">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="#">
              <CgProfile />
            </a>
          </li>
          <li>
            <a href="#">
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

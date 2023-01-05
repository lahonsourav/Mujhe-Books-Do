import React from "react";
import "./Sell.css";
import { Link } from "react-router-dom";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleClick = () => {
    alert("We'll get back to you ASAP!");
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pb9vrqw",
        "template_71kwt7v",
        form.current,
        "0RwgMGfnVh-mwKq1J"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className="sell">
      <div className="sell__container">
        <h3 className="about__line"> Book selling Form</h3>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" />

          <input
            type="text"
            name="book"
            placeholder="Name of the Book"
            required
          />

          <input
            type="text"
            name="author"
            placeholder="Name of the Author"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Enter selling Price"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          {/* <label htmlFor="myfile">Upload photo of the book:</label>
          <input
            type="file"
            name="photo"
            placeholder="Enter your mobile number"
            required
          /> */}

          <textarea
            name="message"
            rows="5"
            placeholder="Tell us briefly about the book"
            required
          ></textarea>

          <button onClick={handleClick} type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      </div>

    </div>
  );
};

export default Contact;

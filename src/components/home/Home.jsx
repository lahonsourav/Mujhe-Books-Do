import React from "react";
import "./Home.css";
import BANNER from "../../images/bookbanner.png";
import Product from "./Product.jsx";
import COMING from "../../images/coming.gif";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={BANNER} alt="banner__image" />
        <div className="home__aboutStar">
          <small>The stars denote the condition of the book</small>
        </div>
        <div className="home__row">
          <Product title="BS Grewal" price={399} image={COMING} rating={4} />
          <Product title="DSA with C" price={299} image={COMING} rating={3} />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="Digital Electronics"
            price={449}
            image={COMING}
            rating={5}
          />
          <Product
            id="2"
            title="Analog Electronics"
            price={299}
            image={COMING}
            rating={2}
          />
          <Product
            id="3"
            title="Microprocessor basics"
            price={249}
            image={COMING}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4"
            title="Master Python"
            price={599}
            image={COMING}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

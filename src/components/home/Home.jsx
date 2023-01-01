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
          <Product title="Demo Book 1" price={399} image={COMING} rating={4} />
          <Product title="Demo Book 2" price={299} image={COMING} rating={3} />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="Demo Book 3"
            price={449}
            image={COMING}
            rating={5}
          />
          <Product
            id="2"
            title="Demo Book 4"
            price={299}
            image={COMING}
            rating={2}
          />
          <Product
            id="3"
            title="Demo Book 5"
            price={249}
            image={COMING}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4"
            title="Demo Book 6"
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

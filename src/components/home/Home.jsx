import React from "react";
import "./Home.css";
import BANNER from "../../images/bookbanner.png";
import Product from "./Product.jsx";
import COMING from "../../images/coming.gif";
import JEC from "../../BookImages/jec.webp";
import SECRET from "../../BookImages/secret.jpg";
import IGNITED from "../../BookImages/ignited.jpg";
import SEVEN from "../../BookImages/seven.jpg";
import PRIDE from "../../BookImages/pride.jpg";
import BOKUL from "../../BookImages/bokul.jpg";
import OIG from "../../BookImages/oig.jpg";
import AXIMOT from "../../BookImages/aximot.jpg";
import WINGS from "../../BookImages/wings.jpg";
import LORD from "../../BookImages/lord.jpg";
import TIGER from "../../BookImages/tiger.jpg";
import TRAIN from "../../BookImages/train.jpg";
import CONPHY from "../../BookImages/conphy.jpg";
import MTGONE from "../../BookImages/mtgone.webp";
import ARONE from "../../BookImages/ARONE.webp";
import ENGPHY from "../../BookImages/ENGPHY.webp";
import CHEMONE from "../../BookImages/chemone.webp";
import CHEMTWO from "../../BookImages/chemtwo.jpg";
import CHEMTHREE from "../../BookImages/chemthree.jpg";


import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={BANNER} alt="banner__image" />
        <div className="home__aboutStar">
          <small>A boy who never read any book built this website</small>
        </div>

        <div className="category">
          <div className="wrapper">
            <small className="category__name">User's Favorite</small>
            <div className="home__row">
              <Product
                title="Arnav Astha aru JEC"
                price={220}
                author="Indrani Sharma"
                image={JEC}
                rating={5}
              />
              <Product
                title="The Secret"
                author="Rhonda Byrne"
                price={799}
                image={SECRET}
                rating={4}
              />
              <Product
                title="Ignited minds"
                author="APJ Abdul Kalam"
                price={189}
                image={IGNITED}
                rating={5}
              />
              <Product
                title="A brief history of 7 killings"
                author="Marlon James"
                price={499}
                image={SEVEN}
                rating={3}
              />
            </div>
            <div className="home__row">
              <Product
                id="1"
                title="Pride and Prejudice"
                author="Jane Austen"
                price={99}
                image={PRIDE}
                rating={5}
              />
              <Product
                id="2"
                title="বকুল ফুলৰ দৰে "
                author="ড° মৃণাল কলিতা "
                price={200}
                image={BOKUL}
                rating={2}
              />
              <Product
                id="3"
                title="Wings of fire"
                author="APJ Abdul Kalam"
                price={150}
                image={WINGS}
                rating={4}
              />
              <Product
                id="3"
                title="One Indian Girl"
                author="Chetan Bhagat"
                price={130}
                image={OIG}
                rating={4}
              />
            </div>
            <div className="home__row">
              <Product
                id="4"
                title="অসীমত যাৰ হেৰাল সীমা"
                author="কাঞ্চন বৰুৱা"
                price={300}
                image={AXIMOT}
                rating={3}
              />
              <Product
                id="4"
                title="Lord of the Rings"
                author="J.R.R. Tolkien"
                price={649}
                image={LORD}
                rating={3}
              />
              <Product
                id="4"
                title="The White Tiger"
                author="Aravind Adiga"
                price={399}
                image={TIGER}
                rating={3}
              />
              <Product
                id="3"
                title="Train to Pakistan"
                author="Khushwant Singh"
                price={120}
                image={TRAIN}
                rating={4}
              />
            </div>
          </div>

          <div className="wrapper">
            <small className="category__name">Student's Library</small>
            <div className="home__row">
              <Product
                title="Concept of Physics"
                author="HC Verma"
                price={399}
                image={CONPHY}
                rating={4}
              />
              <Product
                id="1"
                title="Handbook of Chemistry"
                author="Arihant"
                price={188}
                image={CHEMONE}
                rating={5}
              />
              <Product
                title="21 years JEE main PYQ"
                author="MTG"
                price={449}
                image={MTGONE}
                rating={3}
              />
              <Product
                id="1"
                title="General Organic Chemistry"
                author="Disha Publications"
                price={140}
                image={CHEMTWO}
                rating={5}
              />
            </div>
            <div className="home__row">
              <Product
                id="1"
                title="Chemistry Problem Book"
                author="Wiley Editorial"
                price={690}
                image={CHEMTHREE}
                rating={5}
              />

              <Product
                title="Engineering Physics"
                author="HK Malik"
                price={799}
                image={ENGPHY}
                rating={3}
              />
              <Product
                id="1"
                title="More Books"
                author="Coming soon"
                price={999}
                image={COMING}
                rating={5}
              />
              <Product
                title="Handbook of Physics"
                author="Arihant"
                price={210}
                image={ARONE}
                rating={4}
              />
            </div>
          </div>

          <Link to="/sell" className="home__aboutStar__sell">
            <small>Sell your Books</small>
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./Home.css";
import BANNER from "../../images/bookbanner.png";
import BANNERTW from "../../images/bookbannertwo.jpg";
import BANNERTH from "../../images/bookbannerthree.jpg";

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
import NEH from "../../BookImages/neh.jpg";
import GREAT from "../../BookImages/great.jpg";
import ANGEL from "../../BookImages/angel.webp";
import INTRO from "../../BookImages/intro.jpg";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="home__image" src={BANNER} alt="banner__image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="home__image" src={BANNERTW} alt="banner__image" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="home__image" src={BANNERTH} alt="banner__image" />
          </SwiperSlide>
        </Swiper>

        <div className="home__aboutStar">
          <small>Please Click on Sign in to Login</small>
        </div>

        <div className="category">
          <div className="wrapper">
            <small className="category__name">User's Favorite</small>
            <div className="home__row">
              <div className="toLanding">
                <Product
                  id="1"
                  title="Arnav Astha aru JEC"
                  price={220}
                  author="Indrani Sharma"
                  image={JEC}
                  rating={5}
                />
                <Link to="/one" className="showMore">
                  View More
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="2"
                  title="The Secret"
                  author="Rhonda Byrne"
                  price={799}
                  image={SECRET}
                  rating={4}
                />
                <Link to="/two" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="3"
                  title="Ignited minds"
                  author="APJ Abdul Kalam"
                  price={189}
                  image={IGNITED}
                  rating={5}
                />
                <Link to="/three" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="4"
                  title="History of 7 killings"
                  author="Marlon James"
                  price={499}
                  image={SEVEN}
                  rating={4}
                />
                <Link to="/four" className="showMore">
                  View more
                </Link>
              </div>
            </div>

            <div className="home__row">
              <div className="toLanding">
                <Product
                  id="5"
                  title="Pride and Prejudice"
                  author="Jane Austen"
                  price={99}
                  image={PRIDE}
                  rating={4}
                />
                <Link to="/five" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="6"
                  title="বকুল ফুলৰ দৰে "
                  author="ড° মৃণাল কলিতা "
                  price={200}
                  image={BOKUL}
                  rating={4}
                />
                <Link to="/six" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="7"
                  title="Wings of fire"
                  author="APJ Abdul Kalam"
                  price={150}
                  image={WINGS}
                  rating={5}
                />
                <Link to="/seven" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="8"
                  title="One Indian Girl"
                  author="Chetan Bhagat"
                  price={130}
                  image={OIG}
                  rating={4}
                />
                <Link to="/eight" className="showMore">
                  View more
                </Link>
              </div>
            </div>

            <div className="home__row">
              <div className="toLanding">
                <Product
                  id="9"
                  title="অসীমত যাৰ হেৰাল সীমা"
                  author="কাঞ্চন বৰুৱা"
                  price={300}
                  image={AXIMOT}
                  rating={5}
                />
                <Link to="/nine" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="10"
                  title="অসীমত যাৰ সীমা নেহেৰায়"
                  author="প্ৰণৱ কুমাৰ শৰ্মা"
                  price={1}
                  image={NEH}
                  rating={1}
                />
                <Link to="/ten" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="11"
                  title="Lord of the Rings"
                  author="J.R.R. Tolkien"
                  price={649}
                  image={LORD}
                  rating={4}
                />
                <Link to="/oone" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="12"
                  title="The White Tiger"
                  author="Aravind Adiga"
                  price={399}
                  image={TIGER}
                  rating={3}
                />
                <Link to="/otwo" className="showMore">
                  View more
                </Link>
              </div>
            </div>
            <div className="home__row">
              <div className="toLanding">
                <Product
                  id="13"
                  title="Train to Pakistan"
                  author="Khushwant Singh"
                  price={120}
                  image={TRAIN}
                  rating={4}
                />

                <Link to="/othree" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="14"
                  title="A Great Man"
                  author="Kate Christensen"
                  price={3242}
                  image={GREAT}
                  rating={4}
                />

                <Link to="/ofour" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="15"
                  title="Angels and Demons"
                  author="Dan Brown"
                  price={499}
                  image={ANGEL}
                  rating={4}
                />

                <Link to="/ofive" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="16"
                  title="More Books"
                  author="Coming soon"
                  image={COMING}
                />
                <Link to="/sell" className="showMore">
                  Donate Books
                </Link>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <small className="category__name">Student's Library</small>
            <div className="home__row">
              <div className="toLanding">
                <Product
                  id="17"
                  title="Concept of Physics"
                  author="HC Verma"
                  price={399}
                  image={CONPHY}
                  rating={4}
                />

                <Link to="/oseven" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="18"
                  title="Handbook of Chemistry"
                  author="Arihant"
                  price={188}
                  image={CHEMONE}
                  rating={2}
                />
                <Link to="/oeight" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="19"
                  title="21 years JEE main PYQ"
                  author="MTG"
                  price={449}
                  image={MTGONE}
                  rating={3}
                />

                <Link to="/onine" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="20"
                  title="Organic Chemistry"
                  author="Disha Publications"
                  price={140}
                  image={CHEMTWO}
                  rating={2}
                />
                <Link to="/oten" className="showMore">
                  View more
                </Link>
              </div>
            </div>
            <div className="home__row">
              <div className="toLanding">
                <Product
                  id="21"
                  title="Chemistry Problem"
                  author="Wiley Editorial"
                  price={690}
                  image={CHEMTHREE}
                  rating={3}
                />

                <Link to="/tone" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="22"
                  title="Engineering Physics"
                  author="HK Malik"
                  price={799}
                  image={ENGPHY}
                  rating={3}
                />

                <Link to="/ttwo" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="23"
                  title="Intro to Algorithms"
                  author="Thomas Cormen "
                  price={1499}
                  image={INTRO}
                  rating={4}
                />
                <Link to="/tthree" className="showMore">
                  View more
                </Link>
              </div>

              <div className="toLanding">
                <Product
                  id="24"
                  title="Handbook of Physics"
                  author="Arihant"
                  price={210}
                  image={ARONE}
                  rating={3}
                />

                <Link to="/tfour" className="showMore">
                  View more
                </Link>
              </div>
            </div>
          </div>

          <Link to="/sell" className="home__aboutStar__sell">
            <small>Sell Book</small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

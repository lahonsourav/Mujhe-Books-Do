import React from "react";
import "./allLanding.css";
import TIGER from "../../BookImages/tiger.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={TIGER} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> The White Tiger</p>
            <p className="landing__author__name"> Aravind Adiga</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>399</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              The White Tiger is a novel by Indian author Aravind Adiga. It was
              published in 2008 and won the 40th Booker Prize the same year. The
              novel provides a darkly humorous perspective of India's class
              struggle in a globalized world as told through a retrospective
              narration from Balram Halwai, a village boy. The novel examines
              issues of the Hindu religion, caste, loyalty, corruption and
              poverty in India. The novel has been well-received, making the New
              York Times bestseller list in addition to winning the Booker
              Prize. Aravind Adiga, 33 at the time, was the second youngest
              writer as well as the fourth debut writer to win the prize. Adiga
              says his novel "attempt to catch the voice of the men you meet as
              you travel through India — the voice of the colossal underclass."
              According to Adiga, the exigence for The White Tiger was to
              capture the unspoken voice of people from "the Darkness" – the
              impoverished areas of rural India, and he "wanted to do so without
              sentimentality or portraying them as mirthless humorless weaklings
              as they are usually."
            </small>
            <br />
            <a href="https://www.google.com/search?q=synopsis+of+The+White+Tiger&rlz=1C1ONGR_enIN1016IN1016&sxsrf=AJOqlzX_tO5S5lPZBqrSEADunlyVcGevDg%3A1673375541497&ei=Na-9Y7GDHuLh4-EP4sKXwAI&ved=0ahUKEwjx8efV0b38AhXi8DgGHWLhBSgQ4dUDCA8&uact=5&oq=synopsis+of+The+White+Tiger&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIECCMQJzIECCMQJzIECAAQQzIFCAAQkQIyBQgAEJECMgUIABCRAjIFCAAQkQIyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwA0oECEEYAEoECEYYAFC-AljoBGDvBmgBcAF4AIAB9wGIAfcBkgEDMi0xmAEAoAEBoAECyAEIwAEB&sclient=gws-wiz-serp" target='_blank' >
              Read Summary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

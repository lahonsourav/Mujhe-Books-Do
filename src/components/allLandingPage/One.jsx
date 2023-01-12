import React from "react";
import "./allLanding.css";
import JEC from "../../BookImages/jec.webp";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={JEC} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> Arnav Astha aru JEC</p>
            <p className="landing__author__name"> Indranee Sharma</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>200</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              ''ভিজা চুলিত মোৰ উশাহ সামৰি আৰু ওচৰলৈ নাহিবা মিছ্ আস্থা... আকৌ
              এবাৰ ৰঙা কৰি দিম তোমাৰ টোল পৰা দুগালৰ ৰং.. চুই চাম তোমাৰ 'পোৱালি'
              'পোৱালি' আঙুলিৰ ভাঁজ... এই যে তোমাক সামৰি লম বুকুৰ মাজত, কোনেও
              আঁতৰাই নিব নোৱাৰে আনকি তুমি নিজেও..'' প্ৰথম প্ৰেমৰ মিঠা মিঠা ৰাগীত
              মাতাল দুটি আলসুৱা মন। এই প্ৰেম সাধাৰণ, সহজ, সৰল আৰু আপোন। শেৱালি
              ফুলৰ সুগন্ধি লাগিছে আস্থাৰ গালত, অৰ্ণৱৰ হাতত, জেইচিৰ বতাহত। কঁপি
              থকা বুকুৰ ধপধপনি দুয়োৰে বাবেই নতুন, প্ৰথম, ভাললগা। ভালপোৱাৰ এজাক
              বৰষুণৰ নাম "অৰ্ণৱ আস্থা আৰু JEC"। ফেচবুক পেজ 'অৰ্ধ আকাশ'ত
              আত্মপ্ৰকাশ কৰি চছিয়েল মিডিয়াত তোলপাৰ লগোৱা আৰু পিছলৈ কিতাপ আকাৰে
              ছপা হোৱা জনপ্ৰিয় উপন্যাস 'অৰ্ণব, আস্থা আৰু JEC' এইবাৰ আপোনালোকৰ
              কাষলৈ আহিছে শ্ৰাব্য ৰূপত। কলেজীয়া জীৱনৰ বন্ধুত্ব আৰু প্ৰেমৰ
              মাদকতাই সুকীয়া। তাতে যেতিয়া বিপৰীত স্বভাৱৰ দুজন মানুহ প্ৰেমত পৰে,
              সময় হৈ পৰে অভিমান আৰু আদৰৰ এক অদ্ভুত মিশ্ৰণ। অৰ্ণব আৰু আস্থাৰ
              কাহিনীটোও কিছু তেনেকুৱাই। শান্ত, অন্তৰ্মুখী আস্থাই সামৰি লব পাৰিব
              নে অৰ্ণবৰ উগ্ৰ, বেপৰুৱা প্ৰেমক? অৰ্ণবৰ জীৱনৰ এটা গোপন সত্য আছে।
              আস্থাই পাৰিব নে অৰ্ণবক সেই সত্যৰ সৈতে মুখামুখি কৰাই দিব? সহজ সৰল
              প্ৰেমৰ ধুনীয়া কাহিনী 'অৰ্ণব, আস্থা আৰু JEC' ইন্দ্ৰাণী শৰ্মাৰ প্ৰথম
              উপন্যাস।
            </small>
            <br />
            <a href="https://www.storytel.com/in/en/books/arnab-aastha-aru-jec-1104462" target='_blank' >
              Listen AudioBook Storytell
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

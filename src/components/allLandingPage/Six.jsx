import React from "react";
import "./allLanding.css";
import BOKUL from "../../BookImages/bokul.jpg";

const One = () => {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <img src={BOKUL} alt="" />

          <a href="javascript:void(0)" className="addButton">
            Download PDF
          </a>
        </div>

        <div className="landing__right">
          <div className="landing__product__info">
            <p> বকুল ফুলৰ দৰে</p>
            <p className="landing__author__name"> ড° মৃণাল কলিতা</p>
            <p className="landing__product__price">
              <small>₹</small>
              <strong>200</strong>
            </p>
          </div>
          <div className="landing__details">
            <small>
              বকুল ফুলৰ দৰে হৈছে ড॰ মৃণাল কলিতাৰ দ্বাৰা ৰচিত প্ৰথমখন উপন্যাস।
              ২০১৫ চনৰ নৱেম্বৰ মাহত বান্ধৱ প্ৰকাশনে এই উপন্যাসখন প্ৰকাশ কৰে।
              উপন্যাসখন ধাৰাবাহিকভাৱে প্ৰথমে কিশোৰ-কিশোৰীৰ বাবে উপযোগী মাহেকীয়া
              আলোচনী বাৰ ওঠৰত প্ৰকাশ পায়। উপন্যাসখন ৯২.৭ বিগ এফ এমৰ আজিৰ পৃষ্ঠা
              নামৰ অনুষ্ঠানটিৰ যোগেদি আৰু আকাশবাণী গুৱাহাটী কেন্দ্ৰৰ যোগেদিও
              প্ৰচাৰ কৰা হৈছে। ২০২১ চনৰ ডিচেম্বৰ মাহৰ ৩০ তাৰিখে এই গ্ৰন্থখনৰ
              বাবে মৃণাল কলিতাই সাহিত্য অকাডেমিৰ ‘শিশু সাহিত্য বঁটা’ লাভ কৰে।
            </small>
            <br />
            <small>
              বকুল ফুলৰ দৰে উপন্যাসখনৰ ৰচক মৃণাল কলিতা অসমৰ এগৰাকী
              শিশু-সাহিত্যিক, গল্পকাৰ, ঔপন্যাসিক আৰু নিৱন্ধকাৰ। তেওঁ গুৱাহাটীৰ
              পাণ্ডু মহাবিদ্যালয়ৰ গণিত বিভাগৰ অধ্যাপক।
            </small>
            <br />
            <a href="https://www.google.com/search?q=synopsis+of+%E0%A6%AC%E0%A6%95%E0%A7%81%E0%A6%B2+%E0%A6%AB%E0%A7%81%E0%A6%B2%E0%A7%B0+%E0%A6%A6%E0%A7%B0%E0%A7%87&rlz=1C1ONGR_enIN1016IN1016&sxsrf=AJOqlzU3qBbLJmdhFxVUB5D77TLMavORqQ%3A1673375656889&ei=qK-9Y9P7NaOHjuMPqLu2mAs&ved=0ahUKEwjT7-qM0r38AhWjg2MGHaidDbMQ4dUDCA8&uact=5&oq=synopsis+of+%E0%A6%AC%E0%A6%95%E0%A7%81%E0%A6%B2+%E0%A6%AB%E0%A7%81%E0%A6%B2%E0%A7%B0+%E0%A6%A6%E0%A7%B0%E0%A7%87&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMgUIIRCgATIFCCEQoAEyCAghEBYQHhAdMggIIRAWEB4QHTIICCEQFhAeEB0yCAghEBYQHhAdMggIIRAWEB4QHTIICCEQFhAeEB06CggAEEcQ1gQQsAM6BwguELADEEM6BwgAELADEEM6BAgjECc6BAgAEEM6BQgAEIAESgQIQRgASgQIRhgAUPQDWPAGYLcJaAFwAXgAgAG8AogBqwSSAQUyLTEuMZgBAKABAaABAsgBCsABAQ&sclient=gws-wiz-serp" target='_blank' >
              Read Summary
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;

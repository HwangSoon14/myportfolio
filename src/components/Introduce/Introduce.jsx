import React from "react";
import "./Introduce.scss";
import Me from "../../img/me.jpg"
const Introduce = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-text">
          <h3>Hello , My Name is</h3>
          <h1>HoangSon</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">FrontEnd Developer</div>
              <div className="intro-title-item">DUT-er</div>
              <div className="intro-title-item">IT BKDN</div>
            </div>
          </div>
          <p className="intro-desc">Hello , I'm a 2nd-year of BÁCH KHOA ĐÀ NẴNG university. Just a normal guys trying to be a Developer.
          </p>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        {/* <img src={Me} alt="myself" /> */}
        {/* <div className="intro-wrapperImg">
            <div>
                <div class="border top"></div>
                <div class="border left"></div>
                <div class="border right"></div>
                <div class="border bottom-left"></div>
                <div class="border bottom-right"></div>
            </div>
            <img src={Me} alt="me" />
        </div> */}
      </div>
    </div>
  );
};

export default Introduce;

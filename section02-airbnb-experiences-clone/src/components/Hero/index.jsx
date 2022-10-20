import React from "react";
import "./styles.css";
import heroImage from "../../assets/Hero/hero-image.svg";

// import image01 from "../../assets/Hero/image01.png";
// import image02Top from "../../assets/Hero/image02-top.png";
// import image02Bottom from "../../assets/Hero/image02-bottom.png";
// import image03Top from "../../assets/Hero/image03-top.png";
// import image03Bottom from "../../assets/Hero/image03-bottom.png";
// import image04Top from "../../assets/Hero/image04-top.png";
// import image04Bottom from "../../assets/Hero/image04-bottom.png";
// import image05Top from "../../assets/Hero/image05-top.png";
// import image05Bottom from "../../assets/Hero/image05-bottom.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image-wrapper">
        {/* <img src={image01} alt="" />
        <img src={image02Top} alt="" />
        <img src={image02Bottom} alt="" />
        <img src={image03Top} alt="" />
        <img src={image03Bottom} alt="" />
        <img src={image04Top} alt="" />
        <img src={image04Bottom} alt="" />
        <img src={image05Top} alt="" />
        <img src={image05Bottom} alt="" /> */}
        <img className="hero__image-wrapper__image" src={heroImage} alt="" />
      </div>
      <div className="hero__text-wrapper">
        <h2 className="hero__text-wrapper__heading">Online Experiences</h2>
        <p className="hero__text-wrapper__text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

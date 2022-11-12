import React from "react";
import "./styles.css";
import heroImage from "../../assets/Hero/hero-image.svg";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image-wrapper">
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

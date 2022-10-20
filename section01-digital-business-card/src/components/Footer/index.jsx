import React from "react";
import "./styles.css";
import iconTwitter from "../../assets/Footer/icon-twitter.svg";
import iconFacebook from "../../assets/Footer/icon-facebook.svg";
import iconInstagram from "../../assets/Footer/icon-instagram.svg";
import iconLinkedin from "../../assets/Footer/icon-linkedin.svg";
import iconGithub from "../../assets/Footer/icon-github.svg";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__icon-wrapper">
        <img src={iconTwitter} alt="" />
        <img src={iconFacebook} alt="" />
        <img src={iconInstagram} alt="" />
        <img src={iconLinkedin} alt="" />
        <img src={iconGithub} alt="" />
      </div>
    </section>
  );
}

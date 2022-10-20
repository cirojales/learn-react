import React from "react";
import "./styles.css";
import photo from "../../assets/Info/photo.svg";
import iconEmail from "../../assets/Info/icon-email.svg";

export default function Info() {
  return (
    <section className="info">
      <img className="info__photo" src={photo} alt="" />
      <span className="info__name">Laura Smith</span>
      <span className="info__occupation">Frontend Developer</span>
      <span className="info__website">laurasmith.website</span>
      <a className="info__email-link" href="">
        <img className="info__btn__icon" src={iconEmail} alt="" />
        <span className="info__btn__text">Email</span>
      </a>
    </section>
  );
}

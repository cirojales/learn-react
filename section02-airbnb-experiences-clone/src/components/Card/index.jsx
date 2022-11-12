import React from "react";
import "./styles.css";
import starIcon from "../../assets/Card/star-icon.svg";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card__wrapper">
        {props.status && (
          <div className="card__wrapper__status">{props.status}</div>
        )}
        <img className="card__wrapper__image" src={props.image} alt="" />
        {/* <img src="" alt="" /> */}
      </div>
      <div className="card__info">
        <span className="card__rating">
          <img className="card__star-icon" src={starIcon} alt="" />
          <span className="card__rating__rating">{props.rating}</span>
          <span className="card__rating__rating-qty">
            ({props.reviewCount})
          </span>
          <span className="card__rating__divider">·</span>
          <span className="card__rating__location">{props.location}</span>
        </span>
        <span className="card__description">{props.description}</span>
        <span className="card__price">
          <span className="card__price--bold">From ${props.price}</span> /
          person
        </span>
      </div>
    </div>
  );
}

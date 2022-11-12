import React from "react";
import "./styles.css";
import starIcon from "../../assets/Card/star-icon.svg";

export default function Card(props) {
  let badgeText = null;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.isOnline) {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <div className="card__wrapper">
        {badgeText && (
          <div className="card__wrapper__open-spots">{badgeText}</div>
        )}
        <img
          className="card__wrapper__image"
          src={props.item.coverImg}
          alt=""
        />
      </div>
      <div className="card__info">
        <span className="card__rating">
          <img className="card__star-icon" src={starIcon} alt="" />
          <span className="card__rating__rating">
            {props.item.stats.rating}
          </span>
          <span className="card__rating__rating-qty">
            ({props.item.stats.reviewCount})
          </span>
          <span className="card__rating__divider">·</span>
          <span className="card__rating__location">{props.item.location}</span>
        </span>
        <span className="card__title">{props.item.title}</span>
        <span className="card__price">
          <span className="card__price--bold">From ${props.item.price}</span> /
          person
        </span>
      </div>
    </div>
  );
}

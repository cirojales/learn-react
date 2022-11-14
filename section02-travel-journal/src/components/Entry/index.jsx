import React from "react";
import "./styles.css";
import locationIcon from "../../assets/Entry/location-icon.svg";

export default function Entry(props) {
  return (
    <div className="entry">
      <div className="entry--left-section">
        <img className="entry--location-image" src={props.imageUrl} alt="" />
      </div>
      <div className="entry--right-section">
        <div className="wrapper">
          <img
            className="entry--location-icon"
            src={locationIcon}
            alt="location icon"
          />
          <span className="entry--location">{props.location}</span>
          <a href={props.googleMapsUrl} className="entry--google-maps">
            View on Google Maps
          </a>
        </div>
        <h2 className="entry--title">{props.title}</h2>
        <span className="entry--start-and-end-date">
          {props.startDate} - {props.endDate}
        </span>
        <p className="entry--description">{props.description}</p>
      </div>
    </div>
  );
}

import React from "react";
import "./styles.css";
import locationIcon from "../../assets/Entry/location-icon.svg";

export default function Entry() {
  return (
    <div className="entry">
      <img src="" alt="" />
      <div>
        <img
          className="entry--location-icon"
          src={locationIcon}
          alt="location icon"
        />
        <span className="entry--location"></span>
        <span className="entry--googleMaps">View on Google Maps</span>
      </div>
      <h2 className="entry--title"></h2>
      <span className="startDate"></span>
      <span className="endDate"></span>
    </div>
  );
}

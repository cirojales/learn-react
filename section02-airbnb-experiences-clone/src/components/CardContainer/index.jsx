import React from "react";
import "./styles.css";
import Card from "../Card";
import katieZaferes from "../../assets/Card/katie-zaferes.svg";

export default function CardContainer() {
  return (
    <div className="card-container">
      <Card
        image={katieZaferes}
        rating="5.0"
        reviewCount="6"
        location="USA"
        description="Life lessons with Katie Zaferes"
        price="136"
        status="SOLD OUT"
      />
    </div>
  );
}

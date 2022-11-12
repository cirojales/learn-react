import React from "react";
import "./styles.css";
import Card from "../Card";
import katieZaferes from "../../assets/Card/katie-zaferes.svg";
import data from "../../data";

export default function CardContainer() {
  return (
    <div className="card-container">
      {data.map((item) => {
        return (
          <Card
            image={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            status={item.status}
          />
        );
      })}
      {/* <Card
        image={data[0].coverImg}
        rating="5.0"
        reviewCount="6"
        location="USA"
        description="Life lessons with Katie Zaferes"
        price="136"
        status="SOLD OUT"
      />
      <Card
        image={data[1].coverImg}
        rating="5.0"
        reviewCount="6"
        location="USA"
        description="Learn wedding photography"
        price="136"
        status="SOLD OUT"
      />
      <Card
        image={katieZaferes}
        rating="5.0"
        reviewCount="6"
        location={"USA"}
        description="Life lessons with Katie Zaferes"
        price="136"
        status="SOLD OUT"
      /> */}
    </div>
  );
}

import React from "react";
import "./styles.css";
import Card from "../Card";
import data from "../../data";

export default function CardContainer() {
  return (
    <div className="card-container">
      {data &&
        data.map((item) => {
          console.log(item);
          return <Card key={item.id} item={item} />;
        })}
    </div>
  );
}

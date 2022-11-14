import React from "react";
import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";

export default function App() {
  return (
    <>
      <Header />
      {data &&
        data.map((entry) => {
          console.log(entry.googleMapsUrl);
          return (
            <Entry
              title={entry.title}
              location={entry.location}
              googleMapsUrl={entry.googleMapsUrl}
              startDate={entry.startDate}
              endDate={entry.endDate}
              description={entry.description}
              imageUrl={entry.imageUrl}
            />
          );
        })}
    </>
  );
}

import "./styles.css";
import Navbar from "./components/Navbar/index";
import Hero from "./components/Hero";
import Card from "./components/Card";
import katieZaferes from "./assets/Card/katie-zaferes.svg";
import CardContainer from "./components/CardContainer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardContainer />
      {/* <Card
        image={katieZaferes}
        rating="5.0"
        ratingQty="6"
        location="USA"
        description="Life lessons with Katie Zaferes"
        price="136"
        status="SOLD OUT"
      /> */}
    </>
  );
}

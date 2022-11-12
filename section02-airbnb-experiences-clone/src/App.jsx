import "./styles.css";
import Navbar from "./components/Navbar/index";
import Hero from "./components/Hero";
import CardContainer from "./components/CardContainer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardContainer />
    </>
  );
}

import React from "react";
import CardPage from "./Components/Cards/Cards";
import CaruselPage from "./Components/Carusel/Carusel";
import Header from "./Components/Header/Header";
import Section from "./Components/Section-1/Section.jsx";
import Section4 from "./Components/section-3";

function App() {
  return (
    <>
      <Header />
      <Section/>
      <CardPage/>
      <Section4/>
      <CaruselPage/>
    </>
  );
}

export default App;

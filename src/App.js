import React from "react";
import CardPage from "./Components/Cards/Cards";
import CaruselPage from "./Components/Carusel/Carusel";
import Header from "./Components/Header/Header";
import Section from "./Components/Section-1/Section.jsx";

function App() {
  return (
    <>
      <Header />
      <Section/>
      <CardPage/>
      <CaruselPage/>
    </>
  );
}

export default App;

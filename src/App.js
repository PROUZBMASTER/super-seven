import React from "react";
import CardPage from "./Components/Cards/Cards";
import CaruselPage from "./Components/Carusel/Carusel";
import Header from "./Components/Header/Header";
import Section from "./Components/Section-1/Section.jsx";
import Section4 from "./Components/section-3";
import Section6 from "./Components/Section6/Section6";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Section />
      <CardPage />
      <Section4 />
      <CaruselPage />
      <Section6 />
      <Footer/>
    </>
  );
}

export default App;

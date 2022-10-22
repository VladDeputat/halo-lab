import React from "react";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import LogIn from "./components/logIn/LogIn";
import Slider from "./components/slider/Slider";
import Team from "./components/team/Team";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Team />
      <LogIn />
      <Faq />
      <Slider />
      <Footer />
    </>
  );
};

export default App;

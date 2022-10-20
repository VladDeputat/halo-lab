import React from "react";
import Faq from "./components/faq/Faq";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import LogIn from "./components/logIn/LogIn";
import Team from "./components/team/Team";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Team />
      <LogIn />
      <Faq />
    </>
  );
};

export default App;

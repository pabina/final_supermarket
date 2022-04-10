import React from "react";
import About from "../components/AboutUs/About";
import AboutSlider from "../components/AboutUs/AboutSlider";
import AboutTeam from "../components/AboutUs/AboutTeam";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainNavbar from "../components/MyNavBar/MainNavbar";

const MyAbout = () => {
  return (
    <div>
      <Header />
      <MainNavbar />
      <About />
      <AboutSlider />
      <AboutTeam />
      <Footer />
    </div>
  );
};

export default MyAbout;

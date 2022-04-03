import React from "react";
import Navigation from "./Navigation";
import Slider from "./Slider";
import Brands from "./Brands";
import Carasole from "./Carasole";
import BannerButtom from "./BannerButtom";
import BrandStore from "./BrandStore";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainSlider from "./myslider/MainSlider";
import NextSlider from "./myslider/NextSlider";
import NewNavbar from "./NewNavbar";
import MainNavbar from "./MyNavBar/MainNavbar";
import NewOffer from "./NewOffer/NewOffer";

const Home = () => {
  return (
    <>
      {/* <NewNavbar/> */}
      <MainNavbar />
      <MainSlider />
      <Brands />
      <NextSlider />
      <BannerButtom />
      <BrandStore />
      <NewOffer />
    </>
  );
};

export default Home;

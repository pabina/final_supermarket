import React from "react";

import BannerButtom from "./BannerButtom";
import BrandStore from "./BrandStore";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainSlider from "./myslider/MainSlider";
import NextSlider from "./myslider/NextSlider";
import MainNavbar from "./MyNavBar/MainNavbar";
import NewOffer from "./NewOffer/NewOffer";

const Home = () => {
  return (
    <>
      <MainNavbar />
      <MainSlider />
      <NextSlider />
      <BannerButtom />
      <BrandStore />
      <NewOffer />
    </>
  );
};

export default Home;

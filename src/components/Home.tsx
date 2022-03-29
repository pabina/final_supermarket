
import React from 'react';
import Navigation from './Navigation';
import Slider from './Slider';
import Brands from './Brands';
import Carasole from './Carasole';
import BannerButtom from './BannerButtom';
import BrandStore from './BrandStore';
import NewOffer from './NewOffer';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


const Home = () => {
  return (
    <>
     <Navigation/>
      <Slider/>
     <Brands/>
     <Carasole/>
    <BannerButtom/>
    <BrandStore/>
    <NewOffer/>
    </>
  )
}

export default Home;

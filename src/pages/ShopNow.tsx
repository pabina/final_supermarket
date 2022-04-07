import React from "react";
import { Breadcrumb, Pagination } from "react-bootstrap";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainNavbar from "../components/MyNavBar/MainNavbar";

import ProductDisplay from "../components/products/ProductDisplay";

const ShopNow = () => {
  return (
    <>
      <Header />
      <MainNavbar />
      <BreadcrumbComponent page="products" />
      <ProductDisplay />
      <Pagination />
      <Footer />
    </>
  );
};

export default ShopNow;

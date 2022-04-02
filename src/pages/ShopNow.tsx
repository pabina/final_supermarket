import React from "react";
import { Breadcrumb, Pagination } from "react-bootstrap";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewNavbar from "../components/NewNavbar";
import DisplayProductByMe from "../components/ProductByMe/DisplayProductByMe";
import ProductDisplay from "../components/products/ProductDisplay";

const ShopNow = () => {
  return (
    <>
      <Header />
      <NewNavbar />
      <BreadcrumbComponent page="products" />
      <ProductDisplay />
      <Pagination />
      <Footer />
    </>
  );
};

export default ShopNow;

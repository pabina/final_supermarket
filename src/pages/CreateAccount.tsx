// import { useRef, useState } from "react";
import React from "react";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainNavbar from "../components/MyNavBar/MainNavbar";
import Registration from "../components/Registration/Registration";

const CreateAccount = () => {
  return (
    <>
      <Header />
      <MainNavbar />
      <BreadcrumbComponent page="registration" />
      <Registration />
      <Footer />
    </>
  );
};

export default CreateAccount;

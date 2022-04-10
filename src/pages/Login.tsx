import React from "react";
import BreadcrumbComponent from "../components/BreadcrumbComponent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyLogin from "../components/Login/MyLogin";
import MainNavbar from "../components/MyNavBar/MainNavbar";

const Login = () => {
  return (
    <>
      <Header />
      <MainNavbar />
      <BreadcrumbComponent page="login" />
      <MyLogin />
      <Footer />
    </>
  );
};

export default Login;

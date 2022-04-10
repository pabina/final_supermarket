import React from "react";
import { Carousel } from "react-bootstrap";
import "./MainSlider.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MainSlider = () => {
  return (
    <>
      <Carousel fade controls={false} className="mainSlider">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="assets/images/22.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>WHOLE MOMOS ITEMS ARE NOW ON LINE WITH US</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="assets/images/22.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>WHOLE SNACKS ITEMS ARE NOW ON LINE WITH US</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="assets/images/22.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>WHOLE FROZEN ITEMS ARE NOW ON LINE WITH US</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MainSlider;

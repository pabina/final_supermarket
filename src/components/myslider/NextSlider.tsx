import React from 'react';
import { Carousel } from "react-bootstrap";
import './NextSlider.css';

const NextSlider = () => {
  return (
    <>
      <Carousel className="adSlider">
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="assets/images/b1.jpg"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="assets/images/b3.jpg"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="assets/images/b1.jpg"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
 
    </>
  )
}

export default NextSlider

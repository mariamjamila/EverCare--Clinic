import React from "react";
import { Carousel } from "react-bootstrap";
import pic1 from "./../../../images/medical-banner-with-icons_1325-1526.jpg";
import pic2 from "./../../../images/banner-hospital.jpg";
import pic3 from "./../../../images/header.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={pic1} alt="First slide" />
          <Carousel.Caption>
            <h3>Your Life Our Responsibility</h3>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pic3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Care is Our passion </h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;

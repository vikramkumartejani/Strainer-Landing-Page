"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = () => {
  return <div style={{ display: "none" }}></div>;
};

const TheyTrust = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const logos = [
    "/assets/raya.svg",
    "/assets/adwise.svg",
    "/assets/global.svg",
    "/assets/log-co.svg",
    "/assets/amipass.svg",
    "/assets/chek.svg",
  ];

  const logos1 = [
    "/assets/olami.svg",
    "/assets/oznet.svg",
    "/assets/charidy.svg",
    "/assets/inflamable.svg",
    "/assets/logo5.svg",
    "/assets/t.svg",
  ];

  return (
    <>
      <div className="carousel-container mb-10">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide px-4 flex items-center justify-center h-24">
              <div className="h-full flex items-center justify-center">
                <img src={logo} alt={`Logo ${index + 1}`} className="max-h-full" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {logos1.map((logo, index) => (
            <div key={index} className="logo-slide px-4 flex items-center justify-center h-24">
              <div className="h-full flex items-center justify-center">
                <img src={logo} alt={`Logo ${index + 1}`} className="max-h-full" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TheyTrust;

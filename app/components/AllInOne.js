"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-5 lg:right-40 z-10 cursor-pointer"
      onClick={onClick}
    >
      <Image src="/assets/right-arrow.svg" alt="Next" width={40} height={40} />
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-5 lg:left-40 z-10 cursor-pointer"
      onClick={onClick}
    >
      <Image src="/assets/left-arrow.svg" alt="Previous" width={40} height={40} />
    </div>
  );
};

const AllInOne = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "200px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px",
          arrows: false,
        }
      }
    ]
  };

  const slides = [
    {
      title: "Candidate Management",
      description: "Streamline candidate data storage, enhance CV parsing, and collect valuable feedback.",
      image: "/assets/candidate-management.png",
      height: 800,
      width: 300,
    },
    {
      title: "Marketplace",
      subtitle: "(coming soon)",
      description: "Connect with a network of professionals, discover opportunities, and foster collaborative success in a dynamic recruitment ecosystem.",
      image: "/assets/marketplace.png",
      height: 800,
      width: 300,
    },
    {
      title: "ATS",
      description: "Simplify your hiring workflows, track applicant progress, and make informed decisions with intuitive process management tools.",
      image: "/assets/ats.png",
      height: 800,
      width: 300,
    },
    {
      title: "Marketplace",
      subtitle: "(coming soon)",
      description: "Connect with a network of professionals, discover opportunities, and foster collaborative success in a dynamic recruitment ecosystem.",
      image: "/assets/marketplace.png",
      height: 800,
      width: 300,
    },
    {
      title: "Candidate Management",
      description: "Streamline candidate data storage, enhance CV parsing, and collect valuable feedback.",
      image: "/assets/candidate-management.png",
      height: 800,
      width: 300,
    },
    {
      title: "ATS",
      description: "Simplify your hiring workflows, track applicant progress, and make informed decisions with intuitive process management tools.",
      image: "/assets/ats.png",
      height: 800,
      width: 300,
    },
  ];

  return (
    <div className="bgcustom1 my-10 pb-[4rem] sm:pb-[16rem] md:pb-[300px] pt-[80px] relative">
      <div className="w-full mx-auto relative">
        <h2 className="font-gilroy-regular text-white sm:text-[40px] text-[30px] sm:leading-[48px] leading-[42px] pt-[361px] lg:pt-[310px] pb-[63px] text-center">
          Your <span className="font-gilroy-bold text-[#F4CD59]">all-in-one</span> platform for recruitment
          <span className="text-[#F4CD59]">.</span>
        </h2>
        <div className="carousel-container mx-auto w-full h-[687px] relative">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="flex justify-center items-center px-8 md:px-24">
                <div className="bg-white w-full max-w-[900px] mx-auto min-h-[520px] sm:min-h-[720px] lg:min-h-[450px] rounded-[15px] shadow-md p-6 md:p-10 flex flex-col items-start gap-6">
                  <h3 className="text-blue font-gilroy-bold text-[24px] md:text-[40px] leading-[29px] md:leading-[49.52px] w-full">
                    {slide.title}
                    {slide.subtitle && (
                      <span className="text-[#F4CD59] text-[16px] md:text-[24px] leading-[22px] md:leading-[28.8px] ml-2">
                        {slide.subtitle}
                      </span>
                    )}
                  </h3>
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                    <p className="text-[16px] mt-[25px] md:text-[24px] leading-[22px] md:leading-[28.8px] font-gilroy-regular">
                      {slide.description}
                    </p>
                    <Image src={slide.image} alt={slide.title} className="object-contain" width={500} height={500} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;

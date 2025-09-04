// src/Carousel.js

import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// Updated array with working image links
const carouselImages = [
  'https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/62c5b16b5551f712.jpeg?q=60',
  'https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/c67c045223c5be6d.jpg?q=60',
  'https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/157d3c8c56f97bb2.jpg?q=60',
  'https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/3b8351d48612fe3d.jpg?q=60'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === carouselImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {carouselImages.map((image, index) => (
          <img src={image} alt={`Slide ${index}`} key={index} className="slide-image" />
        ))}
      </div>

      <button className="arrow left-arrow" onClick={goToPrevious}>
        <BsChevronLeft />
      </button>
      <button className="arrow right-arrow" onClick={goToNext}>
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
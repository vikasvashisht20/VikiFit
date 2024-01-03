import React from "react";
import { ReactDOM } from "react";
import { useState, useEffect } from "react";
import Banner from '../assets/gymquality.jpeg';
import Cardioimage from '../assets/cardioImage.jpg';
import Gymspace from '../assets/gymspace.jpg';
import Gymfriends from '../assets/gymcollegues.png'; 



export const Slideshow =() =>{
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
    const delay = 2500;

    const images = [Banner, Cardioimage, Gymspace, Gymfriends];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
        <div
          className="slide"
          key={index}
          style={{ backgroundImage: `url(${image})`}}
        ></div>
      ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}


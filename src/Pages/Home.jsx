import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { images } from "../constant";

function Home() {
  const carouselImages = [
    images.Carousels.Carousel1,
    images.Carousels.Carousel2,
    images.Carousels.Carousel3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <NavBar />

      <section className="relative w-full">
        <div className="relative h-56 md:h-96 overflow-hidden">

          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
          >
            ❯
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;

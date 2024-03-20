"use client";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://www.trendzbd.com/images/media/2022/03/CfJJt27309.jpg",
      title: "Explore Our Latest Arrivals!",
      des: "Indulge in sophistication with our newest collection. Elevate your wardrobe with stylish pieces that exude confidence and allure.",
    },
    {
      img: "https://www.trendzbd.com/images/media/2024/03/w7SK814112.jpg",
      title: "Don't Miss Out on Our Exclusive Flash Sale!",
      des: "Unbeatable deals await! Shop now and indulge in luxury without breaking the bank. Limited time offer, act fast!",
    },
    {
      img: "https://www.trendzbd.com/images/media/2022/03/V0uCG03101.jpg",
      title: "Stay Chic & Glamorous This Summer!",
      des: "Beat the heat in style with our sizzling summer essentials. From sultry dresses to statement swimwear, unleash your inner fashionista.",
    },
  ];

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider, sliders.length]);

  return (
    // absolute z-[-999] top-0 left-1/2 transform -translate-x-1/2
    <div className=" w-full">
      <div className="flex   relative flex-col justify-between">
        <div
          className="w-full h-72 sm:h-96 md:h-[100vh] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/10 before:inset-0 transform duration-1000 ease-linear  overflow-hidden"
          style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
        >
          {/* text container here */}
          <div className="drop-shadow-lg text-white text-center px-5">
            <h1 className="text-xl lg:text-6xl font-semibold mb-3">
              {sliders[currentSlider].title}
            </h1>
            <p className="text-sm md:w-1/2 my-5 mx-auto md:text-base lg:text-lg">
              {sliders[currentSlider].des}
            </p>
          </div>
        </div>
        {/* slider container */}
        <div className="flex absolute bottom-3 right-3 justify-center items-center gap-3 p-2">
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <div
              onClick={() => setCurrentSlider(inx)}
              key={inx}
              className={`size-3 rounded-full  bg-white ${
                currentSlider === inx ? "px-3 duration-1000" : ""
              }  box-content cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

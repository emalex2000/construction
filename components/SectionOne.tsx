'use client';

import { useState } from "react";
import BlurryButton from "./BlurryButton";
import NavBar from "./NavBar";
import ScrollDownButton from "./Scroll";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const backgrounds = [
  "/bg-top.jpg",
  "/site.jpg",
  "/construction.jpg",
];

export default function SectionOne() {
  const [bgIndex, setBgIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handlePrev = () => {
    setDirection("left");
    setBgIndex((prev) => (prev - 1 + backgrounds.length) % backgrounds.length);
  };

  const handleNext = () => {
    setDirection("right");
    setBgIndex((prev) => (prev + 1) % backgrounds.length);
  };

  return (
    <>
      <div className="relative overflow-hidden h-screen w-full">
        {/* ✅ Background Layer */}
        <div
          key={bgIndex}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-700 ${
            direction === "right"
              ? "animate-[var(--animate-slide-in-right)]"
              : "animate-[var(--animate-slide-in-left)]"
          }`}
          style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
        />

        {/* ✅ Content Layer */}
        <div className="relative z-10">
          <NavBar />
          <div className="flex justify-center flex-col items-center mt-[100px] gap-6 h-full px-4 text-center">
            {/* Responsive container for arrows and headings */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <BlurryButton
                text={<HiChevronLeft size={32} />}
                className="rounded-full p-2"
                onClick={handlePrev}
              />
              <div className="flex justify-center flex-col items-center max-w-4xl">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Expertise that Inspires Confidence,
                </h1>
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Buildings That Instill Pride
                </h1>
              </div>
              <BlurryButton
                text={<HiChevronRight size={32} />}
                className="rounded-full p-2"
                onClick={handleNext}
              />
            </div>

            <p className="text-white text-lg sm:text-xl md:text-2xl max-w-xl mt-2">
              Better building starts with Company name.
            </p>
          </div>

          <div className="flex justify-center items-center mt-16 text-[1.5rem]">
            <ScrollDownButton />
          </div>
        </div>
      </div>
    </>
  );
}

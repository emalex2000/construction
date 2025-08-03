import React from 'react';
import BlurryBackground from './BlurryBackground';

const AboutFour = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-4xl rounded-md">
        <BlurryBackground imageUrl="/site.jpg">
          <div className="text-white flex flex-col items-center justify-center text-center space-y-4 py-12 px-4">
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold">
              SEE OUR ASPECTS
            </h1>
            <p className="text-sm sm:text-base max-w-xl">
              Lorem ipsum dolor sit amet consectetur. Tincidunt faucibus facilisis
              malesuada varius id dui porttitor ut.
            </p>
          </div>
        </BlurryBackground>
      </div>
    </div>
  );
};

export default AboutFour;

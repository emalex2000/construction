import React from 'react';
import BlurryButton from './BlurryButton';

const AboutMid = () => {
  return (
    <div className="text-white w-full bg-black py-12 px-4">
      <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
        <h1 className="text-[1.75rem] sm:text-[2rem] font-semibold">
          We have 40+ years of experience in Construction
        </h1>
        <p className="text-base text-gray-300">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <BlurryButton
            className="rounded-sm px-4 py-2 text-sm"
            text="+0123456789"
          />
          <button className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-sm">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMid;

'use client';

import CountUp from 'react-countup';

export default function SectionFive() {
  return (
    <div className="bg-black pb-12 border-b border-gray-50">
      <div className="flex flex-col justify-center text-white text-center items-center px-4">
        <h1 className="text-2xl md:text-4xl lg:text-[3rem] font-bold max-w-xl">
          Build better. On time, On Budget, We deliver
        </h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-9 mt-6 items-center">
          <div>
            <h1 className="text-4xl md:text-[3rem] font-bold text-red-500">
              <CountUp end={40} duration={2} suffix="+" />
            </h1>
            <label className="text-sm md:text-base">Years of success</label>
          </div>

          <div>
            <h1 className="text-4xl md:text-[3rem] font-bold text-red-500">
              <CountUp end={800} duration={3} suffix="+" />
            </h1>
            <label className="text-sm md:text-base">Projects Completed</label>
          </div>
        </div>
      </div>
    </div>
  );
}

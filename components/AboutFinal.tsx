import React from 'react';
import ReviewCard from './Review';

const AboutFinal = () => {
  return (
    <div className="text-white mb-12 px-4">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <p className="text-[1.25rem] text-red-500 font-medium">Client Testimonials</p>
        <h1 className="text-[2rem] font-bold mb-3">Services Recipient Says</h1>
        <p className="max-w-2xl text-sm text-gray-300 mb-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Quisquam voluptatem labore eveniet? Veritatis sint voluptate 
          qui nihil laboriosam eaque ipsum.
        </p>
      </div>

      <div className="overflow-x-auto scrollbar-hide scroll-smooth">
        <div className="flex gap-6 px-4 md:px-8 py-4 w-max">
          {/* ReviewCard components */}
          {[...Array(4)].map((_, i) => (
            <ReviewCard
              key={i}
              title="Awesome Service"
              reviewText="Lorem ipsum dolor sit amet consectetur. Lectus sapien enim dignissim quam eget odio sit ipsum sit. Iaculis nunc id fermentum felis tristique sodales. Vitae vitae maecenas quis quis posuere condimentum sit fermentum. Nisl risus consectetur diam egestas nibh in urna."
              profileImage="/profile.png"
              username="Username"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFinal;

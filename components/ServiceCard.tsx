import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  return (
    <div className="w-[22rem] flex flex-col items-center text-center gap-3">
      <div className="w-full rounded-2xl border border-gray-300 h-[22rem] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-[1.5rem]">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;

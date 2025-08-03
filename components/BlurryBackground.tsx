"use client";

import React from "react";

interface BlurryBackgroundProps {
  imageUrl: string;
  children: React.ReactNode;
}

const BlurryBackground: React.FC<BlurryBackgroundProps> = ({
  imageUrl,
  children,
}) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-75"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="relative z-10 p-10">{children}</div>
    </div>
  );
};

export default BlurryBackground;

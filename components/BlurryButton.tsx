// components/BlurryButton.tsx
import React from "react";

interface BlurryButtonProps {
  text: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const BlurryButton = ({ text, onClick, className = "" }: BlurryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`backdrop-blur-md bg-white/10 text-white cursor-pointer border border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white/50 ${className}`}
    >
      {text}
    </button>
  );
};

export default BlurryButton;

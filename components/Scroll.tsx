'use client';

import React from 'react';

const ScrollDownButton = ({ text = "Scroll Down", className = "" }: { text?: string; className?: string }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={handleScroll}
      className={`px-6 py-2 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default ScrollDownButton;

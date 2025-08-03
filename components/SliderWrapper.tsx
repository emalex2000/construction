"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SliderWrapper = ({
  children,
}: {
  children: React.ReactNode[];
}) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % children.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + children.length) % children.length);
  };

  return (
    <div className="w-full max-w-5xl relative overflow-hidden">
      {/* Slide content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {children[index]}
        </motion.div>
      </AnimatePresence>

      {/* Slide controls */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
        <button onClick={prev} className="hover:text-white">
          ⟨ Prev
        </button>
        <p>
          {index + 1} / {children.length}
        </p>
        <button onClick={next} className="hover:text-white">
          Next ⟩
        </button>
      </div>
    </div>
  );
};

export default SliderWrapper;

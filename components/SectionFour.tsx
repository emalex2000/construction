"use client";


import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function SectionFour() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // triggers earlier for smoother UX

  return (
    <div
      ref={ref}
      className="relative h-screen bg-[url('/house.png')] bg-cover bg-center w-full overflow-hidden"
    >
      {/* Bottom shadow overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Animated text */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-3xl font-bold z-20"
      >
        Visit our gallery
      </motion.h2>
    </div>
  );
}

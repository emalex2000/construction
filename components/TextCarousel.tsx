'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import BlurryButton from './BlurryButton';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // ← DON'T FORGET THIS


const quotes = [
  "Expertise that Inspires Confidence, Buildings That Instills Pride",
  "Quality construction, trusted results.",
  "Your vision, our foundation.",
  "Built to last. Built with heart."
];

const TextCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4 gap-4">
        <BlurryButton
          text={<ArrowLeft className="w-4 h-4" />}
          onClick={scrollPrev}
          className="p-2 rounded-full"
        />
        <BlurryButton
          text={<ArrowRight className="w-4 h-4" />}
          onClick={scrollNext}
          className="p-2 rounded-full"
        />
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {quotes.map((text, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center text-xl text-center px-4 py-6"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;

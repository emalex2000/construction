// In BentoGridDemo.tsx
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export type GridItem = {
  title: string;
  description: string;
  imageUrl: string;
  icon?: React.ReactNode;
};

type BentoGridDemoProps = {
  items: GridItem[];
  className?: string;
};

export function BentoGridDemo({ items, className }: BentoGridDemoProps) {
  return (
    <BentoGrid className={className ?? "max-w-4xl mx-auto"}>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

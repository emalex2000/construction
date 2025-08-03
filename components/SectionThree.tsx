"use client"
import { ThreeDCard } from "./AnimeCard";
import BlurryBackground from "./BlurryBackground";

export default function Page() {
  return (
    <BlurryBackground imageUrl="/blurry-bg.jpg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 place-items-center">
            <ThreeDCard
                title="Floating Goodness"
                description="Hover me, click me, love me."
                imageUrl="/bg-top.jpg"
            />
            <ThreeDCard
                title="Floating Goodness"
                description="Hover me, click me, love me."
                imageUrl="/blurry-bg.jpg"
            />
        </div>

    </BlurryBackground>
  );
}

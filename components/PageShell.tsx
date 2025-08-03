// components/PageShell.tsx
import React from "react";
import NavBar from "./NavBar";

type PageShellProps = {
  title?: string;
  breadcrumb?: string;
  children: React.ReactNode;
  className?: string; // additional styling
};

const PageShell: React.FC<PageShellProps> = ({
  title = "Page Title",
  breadcrumb = "Current Page",
  children,
  className = "",
}) => {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen overflow-x-hidden">
      <NavBar />

      <div className="flex flex-col justify-center items-center py-10 px-4">
        {/* Heading */}
        <h1 className="text-[3rem] font-bold text-center">{title}</h1>

        {/* Breadcrumb */}
        <div className="flex flex-row gap-1 text-sm text-gray-300 mt-2">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          / <p className="text-red-500">{breadcrumb}</p>
        </div>

        {/* Slider Container */}
        <div className={`w-full max-w-6xl mt-10 overflow-x-auto no-scrollbar ${className}`}>
          <div className="flex gap-4 snap-x snap-mandatory px-2">
            {React.Children.map(children, (child, i) => (
              <div
                key={i}
                className="min-w-full snap-center shrink-0"
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageShell;

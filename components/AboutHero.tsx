export default function AboutHero() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-6 py-12 gap-10 bg-[#1a1a1a] text-white">
      {/* Left Content */}
      <div className="flex flex-col gap-4 max-w-xl text-center md:text-left">
        <h2 className="text-red-500 text-lg font-semibold">About Us</h2>
        <h1 className="text-3xl md:text-4xl font-bold">
          We Build for Your Comfort
        </h1>
        <p className="text-sm md:text-base leading-relaxed">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full max-w-sm">
        <img
          src="/engineer.png"
          alt="Engineer Illustration"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}

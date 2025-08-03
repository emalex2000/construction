export default function SectionTwo() {
  return (
    <div className="bg-[url('/home.png')] bg-[#1a1a1a] bg-cover bg-center h-screen w-full text-white flex items-center justify-center">
      <div className="bg-black/60 w-full max-w-3xl px-4 sm:px-6 md:px-10 py-8 rounded flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          We Are Committed To Build Better
        </h1>
        <p className="text-blue-600 text-lg sm:text-xl mb-3 font-semibold">About</p>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          It is a long established fact that a reader will be distracted by the readable content of a page
          when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
          their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
          their infancy. Various versions have evolved over the years, sometimes by accident, sometimes
          on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  );
}

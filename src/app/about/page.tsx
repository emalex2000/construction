import Link from "next/link";
import NavBar from "../../../components/NavBar";
import AboutHero from "../../../components/AboutHero";
import Goal from "../../../components/Goal";
import AboutFour from "../../../components/AboutFour";
import AboutMid from "../../../components/AboutMid";
import AboutFinal from "../../../components/AboutFinal";

export default function AboutUs() {
  return (
    <>
      <div className="bg-[#1a1a1a] flex flex-col gap-8 overflow-x-hidden">
        {/* Nav */}
        <div className="bg-black">
          <NavBar />
        </div>

        {/* Hero Section */}
        <div className="bg-[url('/construction.jpg')] bg-cover bg-center text-white px-4 sm:px-6 md:px-10 py-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl font-bold">About Us</h1>
            <div className="flex flex-wrap gap-1 text-sm sm:text-base">
              <Link href={"/"} className="hover:underline">Home</Link>
              /
              <Link href={"/"} className="text-red-500 hover:underline">About Us</Link>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <div className="px-4 sm:px-6 md:px-10 flex flex-col gap-12">
          <AboutHero />
          <Goal />
          <AboutFour />
          <AboutMid />
          <AboutFinal />
        </div>
      </div>
    </>
  );
}

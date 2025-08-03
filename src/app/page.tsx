
import SectionFive from "../../components/SectionFive";
import SectionFour from "../../components/SectionFour";
import SectionOne from "../../components/SectionOne";
import SectionSix from "../../components/SectionSix";
import SectionThree from "../../components/SectionThree";
import SectionTwo from "../../components/SectoTwo";

export default function Home() {
  return (
    <>
    <div className="m-auto text-[1rem]">
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
    </div>
    
    </>
  );
}

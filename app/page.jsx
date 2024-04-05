import Image from "next/image";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main >
      <Navbar />
      <div className="h-screen flex flex-col items-center bg-gradient-to-b from-[#FFFFFF] to-[#E5F0FF] ">

        <h1 className=" relative top-[8%] text-5xl font-extrabold   ">
          <span className="text-[#296aec]"> Transparent </span>
          <span className="text-[#3b3f61]"> Donations, </span>
          <span className="text-[#296aec]">  Tangible </span>
          <span className="text-[#3b3f61]"> Results  </span>
        </h1>

        <div className=" relative font-medium text-2xl top-[12%]">
          <h1>
            Track donations pegged to gold,ensuring transparency
          </h1>
          <h1>
            Stability, and impactful contributions to global causes
          </h1>
        </div>






      </div>

    </main>
  );
}

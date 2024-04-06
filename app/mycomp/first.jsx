import React from "react";

const First = () => {
  return (
    <div className=" fixed top-0  h-full w-full pt-10 z-0 ">
      <div className="h-full w-full flex flex-col z-0  items-center bg-gradient-to-b from-[#FFFFFF] to-[#E5F0FF] ">
        <h1 className=" relative top-[8%] text-5xl font-extrabold pt-10 ">
          <span className="text-[#296aec]"> Transparent </span>
          <span className="text-[#3b3f61]"> Donations, </span>
          <span className="text-[#296aec]"> Tangible </span>
          <span className="text-[#3b3f61]"> Results </span>
        </h1>

        <div className=" relative font-medium text-2xl top-[12%] text-black">
          <h1>Track donations pegged to gold,ensuring transparency</h1>
          <h1>Stability, and impactful contributions to global causes</h1>
        </div>
      </div>
    </div>
  );
};

export default First;

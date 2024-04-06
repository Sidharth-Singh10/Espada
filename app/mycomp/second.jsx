import React from "react";

const Second = () => {
  return (
    <div className="h-screen w-screen bg-white z-20">
      <div className="bg-[#55565c] h-full w-full relative  z-10 top-full rounded-t-[80px] p-12  flex flex-col ">
        <div className=" flex justify-around h-full">
          <div className="card w-96 bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
            <div className=" flex flex-row justify-around"></div>
            <figure>
              <img src="/education.png" alt="Shoes" />
            </figure>
            <div className="card-body gap-4 items-center">
              <h2 className="card-title text-6xl">ESPADA</h2>

              <h2 className="text-2xl  font-bold top-4"> EDUCATION MISSION </h2>

              <p className="text-xl font-semibold text-center">
                Enabling brighter futures through educational support and
                opportunities for underprivileged communities.
              </p>

              <button className="btn btn-outline font-extrabold btn-lg absolute top-[70%] ">
                JOIN US
              </button>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
            <figure>
              <img src="/healthcare.png" alt="Shoes" />
            </figure>
            <div className="card-body gap-4 items-center">
              <h2 className="card-title font-bold text-6xl">ESPADA</h2>
              <h2 className="text-2xl  font-bold top-4">
                {" "}
                HEALTHCARE MISSION{" "}
              </h2>
              <p className="text-xl font-semibold text-center">
                Empowering healthcare access for those in need through
                transparent and impactful donations
              </p>
              <button className="btn btn-outline font-extrabold btn-lg absolute top-[70%] ">
                JOIN US
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#030511] h-full w-full relative  z-10 top-full  p-12  flex flex-col ">
        <div className=" flex justify-around h-full">
          <div className="card w-96 bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
            <figure>
              <img src="/food.png" alt="Shoes" />
            </figure>
            <div className="card-body gap-4 items-center ">
              <h2 className="card-title font-bold text-6xl">ESPADA</h2>
              <h2 className="text-2xl  font-bold top-4"> HUNGER MISSION </h2>
              <p className="text-xl font-semibold text-center">
                Providing nourishment and hope through transparent food
                donations to those facing hunger and food insecurity.
              </p>
              <button className="btn btn-outline font-extrabold btn-lg absolute top-[70%] ">
                JOIN US
              </button>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
            <figure>
              <img src="/pic.png" alt="Shoes" />
            </figure>
            <div className="card-body gap-4 items-center">
              <h2 className="card-title font-bold text-6xl">ESPADA</h2>
              <h2 className="text-2xl  font-bold top-4"> RELIEF INITIATIVE </h2>
              <p className="text-xl font-semibold text-center">
                Extending a lifeline to those facing crises with transparent and
                impactful donations, offering support in times of dire need
              </p>
              <button className="btn btn-outline font-extrabold btn-lg absolute top-[70%] ">
                JOIN US
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Second;


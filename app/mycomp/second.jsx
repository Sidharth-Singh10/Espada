import React from "react";

const Second = () => {
  return (
    <div className="h-screen w-screen bg-white z-20">
      <div className="bg-[#030511] h-full w-full relative  z-10 top-full rounded-t-[80px] p-12  flex flex-col bg-gradient-to-b from-[#0864e5] to-[#020024]  ">
        <div className=" flex justify-around h-full space-x-40 px-10">
          <div className="card w-auto bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
            <figure>
              <img src="/education.png" alt="Shoes" />
            </figure>
            <div className="card-body gap-4 items-center  ">
              <h2 className="card-title font-bold text-6xl pt-5 ">ESPADA</h2>
              <h2 className="text-2xl  font-bold top-4 py-3 "> EDUCATION MISSION </h2>
              <p className="text-xl font-semibold text-center">
                Enabling brighter futures through educational support and
                opportunities for underprivileged communities.
              </p>
              <button className="btn btn-outline font-extrabold btn-lg absolute top-[70%] ">
                JOIN US
              </button>
            </div>
          </div>

          <div className="card w-auto bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
            <figure>
              <img src="/healthcare.png" alt="Shoes" />
            </figure>
            <div className="card-body gap-4 items-center">
              <h2 className="card-title font-bold text-6xl pt-5">ESPADA</h2>
              <h2 className="text-2xl  font-bold top-4 py-3">
             
                HEALTHCARE MISSION
              </h2>
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

      <div className="bg-[#030511] h-full w-full relative  z-10 top-full rounded-b-[80px]  p-12  flex flex-col bg-gradient-to-b from-[#020024] to-[#0864e5] ">
        <div className=" flex justify-around h-full space-x-40 px-10">
          <div className="card w-auto bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
            <figure>
              <img src="/food.png" alt="Shoes" />
            </figure>
            <div className="card-body gap-4 items-center ">
              <h2 className="card-title font-bold text-6xl pt-5">ESPADA</h2>
              <h2 className="text-2xl  font-bold top-4 py-3"> HUNGER MISSION </h2>
              <p className="text-xl font-semibold text-center">
                Providing nourishment and hope through transparent food
                donations to those facing hunger and food insecurity.
              </p>
              <button className="btn btn-outline font-extrabold btn-lg absolute top-[70%] ">
                JOIN US
              </button>
            </div>
          </div>

          <div className="card w-auto bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
            <figure>
              <img src="/pic.png" alt="Shoes" />
            </figure>
            <div className="card-body gap-4 items-center">
              <h2 className="card-title font-bold text-6xl pt-5">ESPADA</h2>
              <h2 className="text-2xl  font-bold top-4 py-3"> RELIEF INITIATIVE </h2>
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
      <div className="bg-[#030511] h-auto w-auto relative  z-10 top-full rounded-t-[80px] p-12 mt-16 flex flex-col bg-gradient-to-b from-[#0864e5] to-[#020024]">
        <div className="flex space-x-4 mt-5 px-5">
          <div className="card w-1/3 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="/card1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                Welcome to ESPADA
              </h2>
              <p className="text-md ">
                We're ESPADA, revolutionizing charitable giving with
                transparency. Our platform empowers donors to track their
                contributions with ESP coins, ensuring every donation makes a
                meaningful impact. Join us in making a difference today.
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="/card2.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                Unveiling ESP Coins
              </h2>
              <p className="text-md ">
                ESP coins, linked to gold, form the backbone of our donation
                system. Each coin represents a tangible donation, offering
                stability and transparency. Join the movement, where every ESP
                coin counts toward positive change.{" "}
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="/card3.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                Empowering Donation Initiatives
              </h2>
              <p className="text-md ">
                Donate money and receive equivalent ESP coins. Our platform
                seamlessly converts your donation into ESP coins, providing
                transparency and accountability every step of the way. Join us
                in revolutionizing charitable giving.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-5 px-5">
          <div className="card w-1/3 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="/card4.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                Channeling Impactful Contributions
              </h2>
              <p className="text-md ">
                Utilize ESP coins to donate to our affiliated or partner sites.
                Your contributions directly support various initiatives, from
                humanitarian aid to healthcare projects, ensuring your
                generosity creates tangible impact where it's needed most. Join
                our mission today.
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="/card5.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                Trace Your Impact
              </h2>
              <p className="text-md ">
                Follow your donation's journey with a unique identification
                number. Witness firsthand how your contribution makes a
                difference, without ambiguity. Join us in ensuring
                accountability and making tangible impacts in communities
                worldwide.
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="/card6.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                Impact in Motion
              </h2>
              <p className="text-md ">
                See ESP coins in action, fueling real change. Explore case
                studies showcasing tangible outcomes of donations. Witness
                firsthand the lives touched and communities uplifted by your
                contributions. Join us in creating meaningful impact, coin by
                coin.{" "}
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-5 px-5">
          <div className="card w-1/3 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="/card7.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                {" "}
                Stability in Giving
              </h2>
              <p className="text-md ">
                ESP coins, tethered to gold, offer stability in value and global
                acceptance. Enjoy normalized conversion rates and mitigate
                currency fluctuations. Your donations retain their worth,
                ensuring consistent impact. Join us in revolutionizing
                charitable giving with secure, stable contributions.F{" "}
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="/card8.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                Exclusive Rewards Program
              </h2>
              <p className="text-md ">
                Join us and unlock exclusive benefits! Donate on ESPADA to earn
                points redeemable at partner brands for discounts and special
                offers. Your donations not only make a difference but also
                reward you with privileged access to top brands. Join the
                movement today!{" "}
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl image-full">
            <figure>
              <img src="/card9.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">
                Join the Movement
              </h2>
              <p className="text-md ">
                Be part of our mission to make a difference. Participate in
                donation drives, track your impact, and enjoy exclusive
                benefits. Your support fuels positive change globally. Join us
                today in creating a better world for all.
              </p>
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;

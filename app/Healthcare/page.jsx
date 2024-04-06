import Navbar from "../Components/Navbar";

export default function Home() {
    return (
        <div className="h-screen w-screen" >
            <div>
                <Navbar />
            </div>

            <div className="  bg-gradient-to-r from-blue-300 to-purple-300 h-full gap-4 flex justify-around p-5">
                <div className="card w-96 h-full    bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
                    <figure><img src="/cancer.png" alt="Shoes" /></figure>
                    <div className="card-body gap-4 items-center">
                        <h2 className="card-title font-bold text-6xl">ESPADA</h2>
                        <h2 className="text-2xl  font-bold top-4"> HEALTHCARE MISSION </h2>
                        <p className="text-xl font-semibold text-center">Empowering healthcare access for those in need through transparent and impactful donations</p>
                        <button className="btn btn-outline font-extrabold btn-lg absolute top-[70%] ">JOIN US</button>

                    </div>
                </div>

                <div className="card w-96 h-full    bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
                    <figure><img src="/emergency.png" alt="Shoes" /></figure>
                    <div className="card-body gap-4 items-center">
                        <h2 className="card-title font-bold text-6xl">ESPADA</h2>
                        <h2 className="text-2xl  font-bold top-4"> HEALTHCARE MISSION </h2>
                        <p className="text-xl font-semibold text-center">Empowering healthcare access for those in need through transparent and impactful donations</p>
                        <button className="btn btn-outline font-extrabold btn-lg absolute top-[70%] ">JOIN US</button>

                    </div>
                </div>

                <div className="card w-96 h-full    bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
                    <figure><img src="/healthcare.png" alt="Shoes" /></figure>
                    <div className="card-body gap-4 items-center">
                        <h2 className="card-title font-bold text-6xl">ESPADA</h2>
                        <h2 className="text-2xl  font-bold top-4"> HEALTHCARE MISSION </h2>
                        <p className="text-xl font-semibold text-center">Empowering healthcare access for those in need through transparent and impactful donations</p>
                        <button className="btn btn-outline font-extrabold btn-lg absolute top-[70%] ">JOIN US</button>

                    </div>
                </div>


            </div>




        </div>
    );
}

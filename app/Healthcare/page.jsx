"use client"
import Navbar from "../Components/Navbar";

export default function Home() {
    return (
        <div className="h-screen w-screen" >
            <div>
                <Navbar />
            </div>

            <div className="  bg-gradient-to-b from-[#FFFFFF] to-[#E5F0FF] h-full gap-4 flex justify-around p-5">
                <div className="card w-96 h-full    bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
                    <figure><img src="/cancer.png" alt="Shoes" /></figure>
                    <div className="card-body gap-10 items-center">
                        <h2 className="card-title font-bold text-6xl">ESPADA</h2>
                        <h2 className="text-2xl  font-bold top-4"> CANCER FUND </h2>
                        <p className="text-xl font-semibold text-center">Join us in the fight against cancer by supporting our dedicated Cancer Fund, providing critical resources for research, treatment, and patient support.</p>
                        <button className="btn btn-outline font-extrabold btn-lg absolute top-[70%] " onClick={() => document.getElementById('my_modal_3').showModal()}>Donate</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box flex flex-col gap-2">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h2 className="font-bold text-black text-lg">ESPADA HEALTHCARE CANCER FUND</h2>
                                <h3 className="text-gray-400 text-sm">Enter amount you want to donate </h3>
                                <div className="flex justify-around">
                                <input type="text" placeholder="69 ESP" className="input input-bordered input-primary w-full max-w-xs" />
                                <button className="btn btn-primary">Enter</button>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>

                <div className="card w-96 h-full    bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
                    <figure><img src="/healthcare.png" alt="Shoes" /></figure>
                    <div className="card-body gap-10 items-center">
                        <h2 className="card-title font-bold text-6xl">ESPADA</h2>
                        <h2 className="text-2xl  font-bold top-4"> GENERAL FUND </h2>
                        <p className="text-xl font-semibold text-center">Make a difference where it's needed most by contributing to our General Fund, ensuring vital support for various healthcare initiatives and programs</p>
                        <button className="btn btn-outline font-extrabold btn-lg absolute top-[70%] " onClick={() => document.getElementById('my_modal_4').showModal()}>Donate</button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box flex flex-col gap-2">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h2 className="font-bold text-black text-lg">ESPADA HEALTHCARE GENERAL FUND</h2>
                                <h3 className="text-gray-400 text-sm">Enter amount you want to donate </h3>
                                <div className="flex justify-around">
                                <input type="text" placeholder="69 ESP" className="input input-bordered input-primary w-full max-w-xs" />
                                <button className="btn btn-primary">Enter</button>
                                </div>
                            </div>
                        </dialog>                        

                    </div>
                </div>

                <div className="card w-96 h-full    bg-base-100 shadow-xl image-full transform hover:scale-105 transition-transform duration-300">
                    <figure><img src="/emergency.png" alt="Shoes" /></figure>
                    <div className="card-body gap-10 items-center">
                        <h2 className="card-title font-bold text-6xl">ESPADA</h2>
                        <h2 className="text-2xl  font-bold top-4"> EMERGENCY FUND</h2>
                        <p className="text-xl font-semibold text-center">Be a beacon of hope in times of crisis by donating to our Emergency Fund, offering swift assistance to individuals facing urgent medical needs and unforeseen emergencies</p>
                        <button className="btn btn-outline font-extrabold btn-lg absolute top-[70%] " onClick={() => document.getElementById('my_modal_5').showModal()}>Donate</button>
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box flex flex-col gap-2">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h2 className="font-bold text-black text-lg">ESPADA HEALTHCARE EMERGENCY FUND</h2>
                                <h3 className="text-gray-400 text-sm">Enter amount you want to donate </h3>
                                <div className="flex justify-around">
                                <input type="text" placeholder="69 ESP" className="input input-bordered input-primary w-full max-w-xs" />
                                <button className="btn btn-primary">Enter</button>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>



            </div>




        </div>
    );
}

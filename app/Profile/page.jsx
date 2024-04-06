import Navbar from "../Components/Navbar";
import VerticalTrackingLine from "../Components/Nodes/nodes";


export default function Profile() {
    return (
        <div className="h-screen w-screen flex flex-col">

            <div >
                <Navbar />
            </div>

            <div className="flex">



                <div className=" h-screen w-52 border-r-2 border-gray-200 ">

                    <div className="flex flex-col h-3/4 justify-around pl-6">


                        <div>
                            <button className="btn btn-ghost">Accounts</button>
                        </div>

                        <div>
                            <button className="btn  btn-active">My Donations</button>
                        </div>

                        <div>
                            <button className="btn btn-ghost">Redeem Points</button>
                        </div>

                        <div>
                            <button className="btn btn-ghost">Buy ESP</button>
                        </div>

                        <div>
                            <button className="btn btn-ghost">Settings</button>
                        </div>

                    </div>


                </div>

                <div className="h-screen w-full ">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>
                            Amritanshu
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>

                </div>




            </div>


        </div>


    )
}
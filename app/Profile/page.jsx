import Navbar from "../Components/Navbar";
import VerticalTrackingLine from "../Components/Nodes/nodes";
import Nav from "../mycomp/nav";

export default function Profile() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div>
        <Nav />
      </div>

      <div className="flex pt-24  ">
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
                <ul className="list-disc pl-5">
                  <li>
                    <span className="font-bold">From:</span>
                    <span className="text-cyan-700">
                      0x813F5C113983bC5a3630eceC14Cb6A56Eb21e498
                    </span>
                    <span className="text-end ml-40">
                      <span className="font-bold ">Time Stamp</span>
                      <span className="text-cyan-700">: 14 hrs ago</span>
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">To:</span>
                    <span className="text-cyan-700">
                      0xdd16ff8245aDB536Fd6D09631A077F6F5f6812Ff
                    </span>
                  </li>
                </ul>
              </p>
              <br />
              <br />
              <p>
                <ul className="list-disc pl-5">
                  <li>
                    <span className="font-bold">From:</span>
                    <span className="text-cyan-700">
                      0x6Cc9397c3B38739da CbfaA68EaD5F5D77Ba5F455
                    </span>
                    <span className="text-end ml-36">
                      <span className="font-bold">Time Stamp</span>
                      <span className="text-cyan-700">: 2 hrs ago</span>
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">To:</span>
                    <span className="text-cyan-700">
                      0xab706E9e23f95C42F47F3f2ECDfc49e5d16aC549
                    </span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

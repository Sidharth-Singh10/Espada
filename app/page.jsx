import Image from "next/image";
import Nav from "./mycomp/nav";
import First from "./mycomp/first";
import Second from "./mycomp/second";
import Third from "./mycomp/third";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white">
      <div >
        <Nav />
      </div>
      <div>
        <First />
      </div>
      <div>
        <Second/>
      </div>
      <div>
        <Third/>
      </div>
    </div>
  );
}

import Image from "next/image";
import Nav from "./mycomp/nav";
import First from "./mycomp/first";
import Second from "./mycomp/second";
// import Card from "./mycomp/third";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      <div>
        <Nav />
      </div>

      <div className="flex-grow">
        <div>
          <First />
          <Second />
        </div>
      </div>

      
    </div>
  );
}

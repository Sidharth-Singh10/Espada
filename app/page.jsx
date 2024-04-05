import Image from "next/image";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main >
     <Navbar/>
      <Intro/>
    </main>
  );
}

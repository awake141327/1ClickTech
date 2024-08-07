import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "@/components/Main";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <Main /> */}
      <About />
    </div>
  );
}

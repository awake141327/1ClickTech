import dynamic from "next/dynamic";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = dynamic(() => import("remote/Navbar"));
const Footer = dynamic(() => import("remote/Footer"));
const Main = dynamic(() => import("remote2/Main"));

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <Footer />
    </main>
  );
}

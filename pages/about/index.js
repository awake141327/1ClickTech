import dynamic from "next/dynamic";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = dynamic(() => import("remote/Navbar"));
const Footer = dynamic(() => import("remote/Footer"));
const About = dynamic(() => import("remote2/About"));

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}

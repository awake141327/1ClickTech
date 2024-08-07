import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "30px 50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Image
          src="https://1click.tech/_next/static/media/1clicktechlogowhite.c092cd78.svg"
          width={30}
          height={30}
          alt="logo"
        />
        <h1 style={{ fontSize: "26px", fontWeight: "500" }}>1 Click Tech</h1>
      </div>
      <ul style={{ display: "flex", gap: "50px", fontWeight: "500" }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

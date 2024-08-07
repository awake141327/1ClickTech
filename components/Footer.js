import Image from "next/image";

export default function Footer() {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: "60px 50px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ display: "flex", gap: "15px" }}>
          <Image
            src="https://1click.tech/_next/static/media/1clicktechlogowhite.c092cd78.svg"
            width={30}
            height={30}
            alt="logo"
          />
          <h2 style={{ fontSize: "26px", fontWeight: "500", color: "#01FF99" }}>
            1 Click Tech
          </h2>
        </div>
        <p>© 2023 1ClickTech Inc. All rights reserved.</p>
      </div>
      <div style={{ display: "flex", gap: "50px" }}>
        <div>
          <p
            style={{ color: "#01FF99", fontWeight: 500, marginBottom: "10px" }}
          >
            Services
          </p>
          <p>DevOps</p>
          <p>SaaS</p>
          <p>AI/ML Integration</p>
        </div>
        <div>
          <p
            style={{ color: "#01FF99", fontWeight: 500, marginBottom: "10px" }}
          >
            Products
          </p>
          <p>1Click Auction</p>
          <p>1Click CRM</p>
          <p>1Click OTES</p>
          <p>1Click LMS</p>
        </div>
        <div>
          <p
            style={{ color: "#01FF99", fontWeight: 500, marginBottom: "10px" }}
          >
            Quick Links
          </p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Career</p>
          <p>Blogs</p>
        </div>
        <div>
          <p
            style={{ color: "#01FF99", fontWeight: 500, marginBottom: "10px" }}
          >
            Legal
          </p>
          <p>Terma & Conditions</p>
          <p>Privacy Policy</p>
          <p>Cancellation Policy</p>
          <p>Refund</p>
        </div>
      </div>
    </div>
  );
}

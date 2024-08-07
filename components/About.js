export default function About() {
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          gap: "150px",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <img
            src="https://1click.tech/_next/static/media/aboutus.8323aaed.png"
            width={500}
            alt="about"
          />
        </div>
        <div
          style={{
            width: "500px",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            letterSpacing: "1.5px",
            lineHeight: "1.5",
          }}
        >
          <h2 style={{ fontSize: "50px", lineHeight: "1.3" }}>
            Progressing towards innovation
          </h2>
          <p
            style={{
              fontWeight: 300,
            }}
          >
            1ClickTech is your trusted partner in offering customer centric IT
            solutions that lead businesses towards new heights of efficiency,
            excellence and success.
          </p>
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          gap: "100px",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#EEF6F9",
        }}
      >
        <div
          style={{
            width: "600px",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <h2 style={{ fontSize: "50px", lineHeight: 1.2 }}>
            1ClickTech: Redefining the Digital Landscape
          </h2>
          <p
            style={{ fontWeight: 300, lineHeight: 1.5, letterSpacing: "1.2px" }}
          >
            1ClickTech, a venture of 1 Click Global Private Limited is a
            reputable IT service provider offering reliable SaaS-based
            solutions, AI and ML-powered automation, and flexible DevOps service
            access. With new technologies emerging, the team at 1ClickTech
            strives diligently to deliver excellence in the form of easily
            accessible and personalised services, We empower businesses to
            progress towards the path of drafting a success story with seamless
            technology integration paired with dedicated customer service. Join
            us on our journey to build the future of technology, one click at a
            time.
          </p>
        </div>
        <div
          style={{
            width: "600px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "30px" }}
          >
            <img
              src="https://1click.tech/_next/static/media/ourmission.5815c4e3.png"
              width={"80px"}
            />
            <div>
              <h3 style={{ fontSize: "30px", fontWeight: "bold" }}>
                Our Mission
              </h3>
              <p style={{ lineHeight: 1.5, letterSpacing: "1px" }}>
                At 1ClickTech, we are on a mission to revamp business operations
                with contemporary solutions, promoting business growth and
                leading businesses towards a dynamic digital landscape.
              </p>
            </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "30px" }}
          >
            <img
              src="https://1click.tech/_next/static/media/ourvision.ce5d9a21.png"
              width={"80px"}
            />
            <div>
              <h3 style={{ fontSize: "30px", fontWeight: "bold" }}>
                Our Vision
              </h3>
              <p style={{ lineHeight: 1.5, letterSpacing: "1px" }}>
                1ClickTech works with the visions to reimagine the current IT
                integration in business with innovative solutions to empower
                success in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

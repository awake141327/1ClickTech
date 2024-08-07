import { data } from "@/data/data";

export default function Main() {
  return (
    <>
      <h1
        style={{
          padding: "10px 20px",
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "bold",
          textDecoration: "underline",
          marginTop: "40px",
        }}
      >
        Our Services
      </h1>
      <main
        style={{
          padding: "10px 50px",
          justifyContent: "center",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              border: "2px solid white",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "400px",
              padding: "20px 30px",
              borderRadius: "20px",
              border: "2px solid black",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img
                src={item.imgUrl}
                width={100}
                height={100}
                alt="devops"
                style={{ background: "white" }}
              />
              <div>
                <h3 style={{ fontSize: "26px", fontWeight: "bold" }}>
                  {item.title}
                </h3>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {item.subtitle}
                </h4>
              </div>
            </div>
            <hr />
            <div style={{ letterSpacing: "1.4px", textAlign: "center" }}>
              <p style={{ fontSize: "14px" }}>{item.paragraph}</p>
              <br />
              <p style={{ fontSize: "14px" }}>{item.subParagraph}</p>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

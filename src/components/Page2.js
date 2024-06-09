import React from "react";

export default function Page2() {
  return (
    <div
      className="container-fluid"
      style={{
        height: "100vh",
        paddingTop: "100px",
      }}
    >
      <div className="row col-md-12">
        <div
          className="col-md-6"
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          <h1 style={{ fontSize: "48px", fontWeight: "600" }}>
            Provide the best service with out of the box ideas
          </h1>
        </div>
        <div className="col-md-6">
          <p
            style={{
              paddingRight: "80px",
              fontSize: "16px",
              textAlign: "justify",
            }}
          >
            we are a passionate team of digital marketing enthusiasts dedicated
            to helping businesses succeed in the digital world. With years of
            experience and a deep understanding of the ever-evolving online
            landscape, we stay at the forefront of industry trends and
            technologies.
          </p>
        </div>
      </div>
      <div
        className="row col-md-12"
        style={{
          //   paddingLeft: "100px",
          //   paddingTop: "100px",
          padding: "50px 50px",
        }}
      >
        <div className="col-md-4">
          {" "}
          <img
            src={require("../images/image8.png")}
            alt="bootstim"
            loading="lazy"
            style={{
              height: "350px",
              width: "400px",
            }}
          />
        </div>
        <div className="col-md-7">
          <img
            src={require("../images/image9.png")}
            alt="bootstim"
            loading="lazy"
            style={{
              height: "350px",
              width: "900px",
            }}
          />
          <div className="col-md-1">
            <img
              src={require("../images/image.png")}
              alt="bootstim"
              loading="lazy"
              style={{
                height: "100px",
                width: "100px",
                marginTop: "-110px",
                marginLeft: "50rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

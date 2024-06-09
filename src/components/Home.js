import React from "react";

export default function Home() {
  return (
    <div
      className="container-fluid"
      style={{
        height: "600px",
        width: "100  ",
        paddingLeft: "80px",
      }}
    >
      <div className="row col-md-12">
        <div
          className="col-md-6"
          style={{
            paddingTop: "50px",
            height: "600px",
            width: "100  ",
            marginLeft: "-13px",
            paddingLeft: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "600",
              fontFamily: "Plus Jakarta Sans",
            }}
          >
            Stay ahead of the curve with our forward-thinking{" "}
          </h1>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              fontFamily: "Plus Jakarta Sans",
              paddingRight: "80px",
            }}
          >
            An award-winning SEO agency with disciplines in digital marketing,
            design, and website development. focused on understanding you.
          </p>
          <div
            className="row"
            style={{
              marginTop: "50px",
            }}
          >
            <div className="col-md-4">
              <button className="btn btn-dark">
                Schedule Call
                <i class="fa fa-arrow-right mx-2" aria-hidden="true"></i>
              </button>
            </div>
            <div className="col-md-4">
              <h5>View Case Study</h5>
            </div>
          </div>
        </div>
        <div
          className="col-md-6"
          style={{
            backgroundColor: "blue",
            height: "600px",
            width: "100  ",
          }}
        ></div>
      </div>
    </div>
  );
}

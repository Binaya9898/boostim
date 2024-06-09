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
                <i className="fa fa-arrow-right mx-2" aria-hidden="true"></i>
              </button>
            </div>
            <div className="col-md-4">
              <h5>View Case Study</h5>
            </div>
          </div>
          <div
            className="row col-md-12"
            style={{
              paddingTop: "30px",
            }}
          >
            <div className="col-md-4">
              <p
                style={{
                  marginTop: "30px",
                }}
              >
                Trusted by the world's biggest brands
              </p>
            </div>
            <div className="col-md-8">
              <div className="row col-md-12">
                <div className="col-md-4">
                  {" "}
                  <img
                    src={require("../images/image4.png")}
                    alt="bootstim"
                    loading="lazy"
                    style={{
                      height: "100px",
                      width: "100px",
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <img
                    src={require("../images/image5.png")}
                    alt="bootstim"
                    loading="lazy"
                    style={{
                      height: "100px",
                      width: "100px",
                    }}
                  />
                </div>
                <div className="col-md-4">
                  <img
                    src={require("../images/image6.png")}
                    alt="bootstim"
                    loading="lazy"
                    style={{
                      height: "100px",
                      width: "100px",
                      marginTop: "-10px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6"
          style={{
            backgroundColor: "white",
            height: "600px",
            width: "100  ",
            paddingTop: "50px",
          }}
        >
          <div className="row col-md-12">
            <div className="col-md-3">
              <img
                src={require("../images/image1.jpg")}
                alt="bootstim"
                loading="lazy"
                style={{
                  height: "300px",
                  width: "350px",
                }}
              />
            </div>
            <div className="col-md-3">
              <img
                src={require("../images/image2.png")}
                alt="bootstim"
                loading="lazy"
                style={{
                  height: "130px",
                  width: "150px",
                  //   marginLeft: "-200px",
                  marginTop: "-50px",
                }}
              />
            </div>
            <div className="col-md-6">
              <div
                className="container"
                style={{
                  backgroundColor: "rgba(240, 240, 240, 1)",
                  height: "300px",
                  paddingTop: "50px",
                }}
              >
                <h1
                  style={{
                    fontSize: "84px",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  230+
                </h1>
                <p
                  style={{
                    marginBottom: "50px",
                  }}
                >
                  some big companies that we work with, and trust us very much
                </p>

                <img
                  src={require("../images/image3.png")}
                  alt="bootstim"
                  loading="lazy"
                  style={{
                    marginTop: "100px",
                    height: "10px",
                    width: "300px",
                    //   marginLeft: "-200px",
                    marginTop: "-50px",
                    marignLeft: "50px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <img
              src={require("../images/image7.jpg")}
              alt="bootstim"
              loading="lazy"
              style={{
                height: "250px",
                width: "800px",
                //   marginTop: "-10px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

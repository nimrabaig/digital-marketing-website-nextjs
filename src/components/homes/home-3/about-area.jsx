import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AngleArrow from "@/src/svg/angle-arrow";
import VideoPopup from "@/src/modals/video-popup";
// about img import here
import about_img_1 from "@assets/img/about/home-3/shape-4.png";
import about_img_2 from "@assets/img/about/home-3/img-1.jpg";
import about_img_3 from "@assets/img/about/home-3/img-2.jpg";
import about_img_4 from "@assets/img/about/home-3/img-3.jpg";
// about shape import here
import about_shape_1 from "@assets/img/about/home-3/shape-1.png";
import about_shape_2 from "@assets/img/about/home-3/shape-2.png";
import about_shape_3 from "@assets/img/about/home-3/shape-3.png";
import "react-circular-progressbar/dist/styles.css";

import about_img from "@assets/img/about/about-1.png";
import about_img_10 from "@assets/img/business/shape-5.png";

import about1 from "@assets/img/about/innovation.png";
import about2 from "@assets/img/about/integrity.png";
import about3 from "@assets/img/about/ccApproach.png";
import about4 from "@assets/img/about/growth.png";

const AboutArea = ({ about }) => {
  const percentage = 50;
  const percentage2 = 75;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className={`${
          about
            ? "tp-about-breadcrumb pt-100 pb-90"
            : "tp-about-3-area pt-185 pb-170"
        } p-relative`}
      >
        {about ? (
          <div className="tp-about-3-shape d-none d-lg-block">
            <Image src={about_img_10} alt="theme-pure" />
          </div>
        ) : (
          <div className="shape-bg">
            <Image src={about_img_1} alt="theme-pure" />
          </div>
        )}
        <div className="container">
          <h3 style={{ margin: "0px auto 20px", textAlign: "center" }}>
            Why Choose Lumenta Digital Marketing Agency?
          </h3>
          <div
            className="col-lg-12"
            style={{
              margin: "0px auto 80px",
              textAlign: "center",
              fontSize: "1rem",
            }}
          >
            Lumenta Digital is a full-service marketing agency operating in the
            dynamic realm of digital marketing. In the ever-evolving landscape
            of online business promotion, locating a dependable Internet
            Marketing Agency can be a challenging task. Fortunately, Lumenta
            Digital Marketing Agency Canada, stands ready to provide guidance
            and support for your business endeavors in the competitive world of
            digital marketing.
          </div>
          <div className="row">
            {about ? (
              <div className="col-lg-6">
                <div className="tp-about-breadcrumb-img p-relative text-center fadeLeft">
                  <Image src={about1} alt="theme-pure" />
                </div>
              </div>
            ) : (
              <div className="col-lg-6">
                <div className="tp-about-3-img p-relative fadeLeft">
                  <Image src={about_img_2} alt="theme-pure" />
                  <Image
                    className="shape-1"
                    src={about_img_3}
                    alt="theme-pure"
                  />
                  <div className="shape-2 p-relative">
                    <Image src={about_img_4} alt="theme-pure" />
                    <div className="tp-video-play">
                      <a
                        className="popup-video"
                        onClick={() => setIsVideoOpen(true)}
                      >
                        <i className="fa-sharp fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <Image
                    className="shape-3"
                    src={about_shape_1}
                    alt="theme-pure"
                  />
                  <Image
                    className="shape-4"
                    src={about_shape_2}
                    alt="theme-pure"
                  />
                  <Image
                    className="shape-5"
                    src={about_shape_3}
                    alt="theme-pure"
                  />
                </div>
              </div>
            )}

            <div className="col-lg-6" style={{ marginTop: 80 }}>
              <div className="tp-about-3-wrapper">
                <div className="tp-about-3-title-wrapper">
                  <h3 className="tp-section-title">Innovation</h3>
                </div>
                <p className="text">
                  Lumenta Digital Marketing Agency USA embraces creativity and
                  continuously seeks innovative solutions to stay ahead in the
                  dynamic digital marketing services landscape. Our commitment
                  to innovation drives us to explore new possibilities, keeping
                  our internet marketing agency strategies fresh and compelling.
                </p>
                <div className="tp-about-progressbar-inner d-flex flex-wrap pt-20"></div>
                <div className="tp-about-3-btn-inner d-flex flex-wrap"></div>
              </div>
            </div>

            <div className="col-lg-6" style={{ marginTop: 80 }}>
              <div className="tp-about-3-wrapper">
                <div className="tp-about-3-title-wrapper">
                  <h3 className="tp-section-title">Integrity</h3>
                </div>
                <p className="text">
                  Trust is the foundation of our relationships at Lumenta
                  Digital Marketing Agency Canada. Our solutions are backed by
                  meticulously defined methodologies tailored to project
                  requirements, ensuring seamless planning, development, and
                  timely delivery.
                </p>
                <div className="tp-about-progressbar-inner d-flex flex-wrap pt-20"></div>
                <div className="tp-about-3-btn-inner d-flex flex-wrap"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-breadcrumb-img p-relative text-center fadeLeft">
                <Image src={about2} alt="theme-pure" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="tp-about-breadcrumb-img p-relative text-center fadeLeft">
                <Image src={about3} alt="theme-pure" />
              </div>
            </div>
            <div className="col-lg-6" style={{ marginTop: 80 }}>
              <div className="tp-about-3-wrapper">
                <div className="tp-about-3-title-wrapper">
                  <h3 className="tp-section-title">Client-Centric Approach</h3>
                </div>
                <p className="text">
                  At Lumenta, clients are at the heart of everything we do. We
                  prioritize understanding their unique needs and challenges,
                  ensuring our strategies are tailored to deliver maximum value.
                </p>
                <div className="tp-about-progressbar-inner d-flex flex-wrap pt-20"></div>
                <div className="tp-about-3-btn-inner d-flex flex-wrap"></div>
              </div>
            </div>

            <div className="col-lg-6" style={{ marginTop: 80 }}>
              <div className="tp-about-3-wrapper">
                <div className="tp-about-3-title-wrapper">
                  <h3 className="tp-section-title">Growth</h3>
                </div>
                <p className="text">
                  In the ever-evolving digital internet marketing agency
                  Canada’s landscape, we embrace success as a continual journey,
                  staying at the forefront of industry trends. Our commitment to
                  continuous learning empowers our team, ensuring the consistent
                  delivery of cutting-edge digital marketing services to our
                  clients in the USA, Canada and worldwide.
                </p>
                <div className="tp-about-progressbar-inner d-flex flex-wrap pt-20"></div>
                <div className="tp-about-3-btn-inner d-flex flex-wrap"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-breadcrumb-img p-relative text-center fadeLeft">
                <Image src={about4} alt="theme-pure" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"csnD5EVL5z8"}
      />
      {/* video modal end */}
    </>
  );
};

export default AboutArea;

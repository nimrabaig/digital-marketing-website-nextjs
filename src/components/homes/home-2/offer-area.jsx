import React from "react";
import Link from "next/link";
import Image from "next/image";

import offer_shape_1 from "@assets/img/offering/shape.png";
import offer_shape_2 from "@assets/img/offering/shape-2.png";

import offering_img_1 from "@assets/img/offering/SEO.svg";
import offering_img_2 from "@assets/img/offering/web-design.svg";
import offering_img_3 from "@assets/img/offering/social-media.svg";
import offering_img_4 from "@assets/img/offering/ppc.svg";

const offering_data = [
  {
    id: 1,
    img: offering_img_1,
    title: (
      <>
        Search Engine <br /> Optimization (SEO)
      </>
    ),
    slug: "search-engin-optimization",
    description: (
      <>
       Increase search rankings and attract high-quality, relevant traffic.
      </>
    ),
  },
  {
    id: 2,
    img: offering_img_2,
    title: (
      <>
        Website Design <br />& Development
      </>
    ),
    slug: "website-design-and-Development",
    description: (
      <>
        Improve digital marketing results by creating a well-developed website.
      </>
    ),
  },
  {
    id: 3,
    img: offering_img_3,
    title: (
      <>
        Social Media <br />
        Marketing
      </>
    ),
    slug: "social-media-marketing",
    description: (
      <>Elevate brand story across online channels with a unique presence.</>
    ),
  },
  {
    id: 4,
    img: offering_img_4,
    title: (
      <>
        Pay Per Click <br /> (PPC)
      </>
    ),
    slug: "pay-per-click",
    description: (
      <>Optimize & boost search engine visibility and attract valuable leads.</>
    ),
  },
];

const OfferArea = () => {
  return (
    <>
      <section
        className="tp-offer-area p-relative pt-120 "
        style={{ backgroundImage: `url(/assets/img/offering/bg.png)` }}
      >
        <div className="tp-offer-overlay"></div>
        <div className="tp-offer-shape">
          <Image
            className="shape-1 d-none d-xl-block"
            src={offer_shape_1}
            alt="theme-pure"
          />
          <Image className="shape-2" src={offer_shape_2} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tp-feature-title-wrapper">
                <h2 className="tp-section-title">
                  Our <span style={{ color: "#ff8d0b"}}>Digital Marketing</span><br /> Services
                  {/* <span className="title-left-shape">
                    <LineArrowTwo />
                  </span> */}
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
                     <div id='tp-feature-wrapper2' className="tp-feature-wrapper offer p-relative">
                        <p>Lumenta Digital provides diverse innovative digital marketing services tailored to amplify online presence and drive impactful results.</p>
                     </div>
                  </div>
          </div>
          <div className="row justify-content-center">
            {offering_data.map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                <div className="tp-offer-wrapper text-center mb-30">
                  <h3 className="offer-title">{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tp-offer-wrapper-thumb">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                  <div className="tp-offer-wrapper-btn">
                    <Link href={`/services/${item.slug}`}>
                      Read Out More{" "}
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferArea;

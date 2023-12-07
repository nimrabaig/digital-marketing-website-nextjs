import React from "react";
import Image from "next/image";

import headphone from "@assets/img/cta/home-3/headphone.png";
import conversation from "@assets/img/cta/home-3/conversation.png";
import footer_contact_shape_1 from "@assets/img/cta/home-3/shape-2.png";
import footer_contact_shape_2 from "@assets/img/cta/home-3/shape-3.png";

const FooterContact = ({ bg_style, contact_style }) => {
  return (
    <>
      <div
        className={`${
          bg_style
            ? ""
            : contact_style
            ? "tp-contact-cta-area"
            : "tp-cta-4-area"
        } p-relative`}
      >
        <div className="tp-cta-4-shape">
          <Image src={footer_contact_shape_1} alt="theme-pure" />
        </div>
        <div className="container footer-contact-container">
          <div className="row gx-0">
            <div className="col-xl-6">
              <div className="tp-cta-4-wrapper-left" style={{ height: "100%" }}>
                <Image
                  className="shape-1"
                  src={footer_contact_shape_2}
                  alt="theme-pure"
                />
                <div className="tp-cta-4-mail d-flex px-1  flex-wrap  justify-content-center justify-content-xl-start align-items-center">
                  <Image src={conversation} alt="theme-pure" />
                  <a
                    href="mailto:info@lumentadigital.com"
                    className="text-md text-sm text-lg text-xs"
                    style={{ textAlign: "center"}}
                  >
                    Contact us at <span>info@lumentadigital.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="tp-cta-4-wrapper-right"
                style={{ height: "100%" }}
              >
                <div className="tp-cta-4-headphone d-flex px-1 flex-wrap justify-content-center ">
                  <div className="tp-cta-4-headphone-thumb">
                    <Image src={headphone} alt="theme-pure" />
                  </div>
                  <div className="tp-cta-4-content">
                    <p className="text-md text-sm text-lg text-xs">
                      PERFECT SOLUTION From <span>Advisor</span>
                    </p>
                    <a
                      className="text-lg text-md text-sm text-xs"
                      href="tel:16138072399"
                    >
                      +1 (613) 807 - 2399
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContact;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SEO from "../common/seo";
import error_shape from "@assets/img/error/error-shape.png";
import ComingSoonImg from "@assets/img/error/coming-soon.png";
import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "../layout/headers/header-2";

const index = () => {
  return (
    <>
      <SEO pageTitle={"Oops.! Page Not Found!"} />
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-error-area tp-error-ptb p-relative">
              <div className="tp-error-left-shape">
                <Image src={error_shape} alt="theme-pure" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-content-box text-center">
                      <Image src={ComingSoonImg} alt="theme-pure" />
                    </div>
                    <div className="tp-error-text-box text-center">
                      <h4 className="error-title-sm">we are cooking something great</h4>
                      <p>The page you are looking for does not exist right now</p>
                      <Link className="tp-btn-inner alt-color-black" href="/">
                        <span className="tp-btn"> Back To Home</span>
                        <b></b>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <FooterTwo />
        </div>
      </div>
    </>
  );
};

export default index;

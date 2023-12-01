import React from "react";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import AboutArea from "./../homes/home-3/about-area";
import FeatureArea from "../homes/home/feature-area";
import SupportArea from "./support-area";
import BlogArea from "@/src/common/blog-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";

const About = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Who We Are" page_title="" />
        <AboutArea about={true} />
        {/* <CounterArea about={true} /> */}
        <FeatureArea about={true} />
        <SupportArea />
        {/* <VideoArea /> */}
        {/* <TestimonialFeature /> */}
        {/* <TestimonialArea /> */}
        {/* <BrandArea /> */}
        {/* <TeamArea /> */}
        {/* <BlogArea /> */}
        <FooterContact />
      </main>
      <FooterTwo />
    </>
  );
};

export default About;

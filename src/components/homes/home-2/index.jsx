import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import HeroArea from "./hero-area";
import OfferArea from "./offer-area";
import BusinessArea from "./business-area";
import CounterArea from "./counter-area";
import IndustryArea from "../../../common/industry-area";
import FaqArea from "../home/faq-area";
import BrandArea from "../home/brand-area";
import BlogArea from "./blog-area";
import FeatureArea from "../home-3/feature-area";
import CategoryArea from "../home-3/category-area";
import TestimonialArea from "../../../common/testimonial-area";
import ServiceArea from "../home/service-area";
import FooterTwo from "@/src/layout/footers/footer-2";
import SupportArea from "../home/support-area";
import PricingArea from "./pricing-area";
import answer_question_data from "@/src/data/answer-question-data";
const HomeTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <HeroArea />
        <OfferArea />
        {/* <BusinessArea /> */}
        {/* <CounterArea /> */}
        {/* <IndustryArea /> */}
        {/* <FeatureArea /> */}
        {/* <BrandArea />
          <BlogArea /> */}     
        <PricingArea />
        <ServiceArea />
        <BrandArea />
        {/* <SupportArea /> */}
        <CategoryArea />
        {/* <FeatureArea /> */}
        {/* <TestimonialArea /> */}
        <FaqArea answerQuestionData={answer_question_data} />
      </main>
      <FooterTwo />
    </>
  );
};

export default HomeTwo;

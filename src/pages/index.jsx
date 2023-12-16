import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HomeTwo from "../components/homes/home-2";

const seo = {
  title_1:
    "Boost Your Online Presence with Result-Orientated Digital Marketing",
  title_2: "Step-by-Step Guide to Effective Digital Marketing with Our Agency",
  description:
    "Lumenta Digital is a full-service digital marketing agency that offers tailored marketing services and more to drive your business growth.",
};

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={seo?.title_1} description={seo?.description} />
      <HomeTwo />
    </Wrapper>
  );
};

export default index;

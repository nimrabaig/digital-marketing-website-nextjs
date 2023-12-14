import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HomeTwo from "../components/homes/home-2";

const seo = {
  Title_1:
    "Boost Your Online Presence with Result-Orientated Digital Marketing",
  Title_2: "Step-by-Step Guide to Effective Digital Marketing with Our Agency",
  DESCRIPTION:
    "Lumenta Digital is a full-service digital marketing agency that offers tailored marketing services and more to drive your business growth.",
};

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={seo.Title_1} description={seo.DESCRIPTION} />
      <HomeTwo />
    </Wrapper>
  );
};

export default index;

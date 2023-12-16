import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Pricing from "../components/pricing";

const seo = {
  title: "Lumenta digital marketing company compare our plans.",
  description:
    "Your guide to making informed decision with lumenta digital marketing agency",
};

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={seo?.title} description={seo?.description} />
      <Pricing />
    </Wrapper>
  );
};

export default index;

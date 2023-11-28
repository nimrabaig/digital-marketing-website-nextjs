import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Pricing from "../components/pricing";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Portfolio"} />
      <Pricing />
    </Wrapper>
  );
};

export default index;

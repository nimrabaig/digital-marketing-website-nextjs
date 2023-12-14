import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import About from "../components/about";

const seo = {
  title_1: "Guiding Digital Marketing Company",
  title_2: "Lumenta digital Marketing Agency",
  description:
    "Lumenta digital is a leading digital marketing agency handout full-service online marketing solution. We provide convention strategies that yield profitable results.",
};

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={seo.title_1} description={seo.description} />
      <About />
    </Wrapper>
  );
};

export default index;

import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Contact from "../components/contact";

const seo = {
  title_1: "Contact Lumenta digital digital Marketing Agency ",
  title_2: "Request More Information",
  description:
    "A one-stop destination for all your web needs, lumenta digtal Marketing Agency, offers SEO, social media, web design, PPC services and more.",
};

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={seo?.title_1} description={seo.description} />
      <Contact />
    </Wrapper>
  );
};

export default index;

import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import Sitemap from "@/src/components/sitemap";
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={""} />
      <main>
        <Sitemap />
      </main>
    </Wrapper>
  );
};

export default index;

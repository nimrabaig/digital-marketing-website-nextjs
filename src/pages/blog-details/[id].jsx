import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import BlogDetails from "../../components/blog-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog"} />
      <BlogDetails />
    </Wrapper>
  );
};

export default index;

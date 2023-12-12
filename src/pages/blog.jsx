import React, { useEffect } from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import { useRouter } from "next/router";
import BlogDetails from "../components/blog-details";

const index = () => {
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/coming-soon");
  // }, []);

  return (
    <Wrapper>
      <SEO pageTitle={"Blog"} />
      <BlogDetails />
    </Wrapper>
  );
};

export default index;

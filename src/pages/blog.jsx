import React, { useEffect } from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Blog from "../components/blog";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  // useEffect(() => {
  //   router.push("/coming-soon");
  // }, []);

  return (
    <Wrapper>
      <SEO pageTitle={"Blog"} />
      <Blog />
    </Wrapper>
  );
};

export default index;

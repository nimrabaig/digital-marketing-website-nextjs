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
      <SEO
        pageTitle={
          "Our Stories: A Blend of Digital Marketing and Web Development"
        }
        description={
          "Stay ahead in the digital marketing game with Lumenta's blog, offering valuable insights on digital marketing techniques, Web design tips, SEO strategies, PPC best practices, and social media trends."
        }
      />
      <Blog />
    </Wrapper>
  );
};

export default index;

import React from "react";
import PostboxArea from "./postbox-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";

const Blog = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Blogs" page_title="" imgName="blogs-breadcrumb" />
        <PostboxArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default Blog;

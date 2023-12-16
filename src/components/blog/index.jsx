import React from "react";
import PostboxArea from "./postbox-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";

const Blog = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        {/* <Breadcrumb top_title="Blog Page" page_title="Blog" /> */}
        <PostboxArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default Blog;

import React from "react";
import BlogDetailsPostbox from "./blog-details-postbox";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";

const BlogDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        {/* <Breadcrumb top_title="Blog Details" page_title="Blog Details" /> */}
        <BlogDetailsPostbox />
        <FooterContact bg_style={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default BlogDetails;

import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import React from "react";
import ContactArea from "./contact-area";
import GoogleMap from "./google-map";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";

const Contact = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb
          top_title="Contact Us"
          page_title="Contact Us"
          imgName="breadcrumb-bg-1"
        />
        <ContactArea />
        <GoogleMap />
        <FooterContact contact_style={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default Contact;

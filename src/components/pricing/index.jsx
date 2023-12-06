import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import PackageArea from "./package-area";
import FooterTwo from "@/src/layout/footers/footer-2";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";

const Pricing = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb
          top_title="Compare Our Plans"
          page_title="Your Guide to Making Informed Decision"
          imgName="pricing-bg"
        />
        <PackageArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Pricing;

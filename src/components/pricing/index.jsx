import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import PackageArea from "./package-area";
import Footer from "@/src/layout/footers/footer-2-";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";

const Pricing = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb
          top_title="Pricing Plans"
          page_title=""
          imgName="pricing-bg"
        />
        <PackageArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Pricing;

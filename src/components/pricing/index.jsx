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
          top_title="Pricing Plans"
          page_title="Pricing Plans"
          imgName="breadcrumb-bg-1"
        />
        <PackageArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Pricing;

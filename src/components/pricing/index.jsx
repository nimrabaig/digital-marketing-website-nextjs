import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import PackageArea from "./package-area";
import FooterTwo from "@/src/layout/footers/footer-2";


const Pricing = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <PackageArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Pricing;

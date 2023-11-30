import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";
import service_data from "@/src/data/service-data";
import { useRouter } from "next/router";

const ServiceDetails = () => {
  const router = useRouter()
  const index = parseInt(router.query.id) - 1;
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title={service_data[index]?.title} page_title= {service_data[index]?.subTitle} />
        <ServiceDetailsArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default ServiceDetails;

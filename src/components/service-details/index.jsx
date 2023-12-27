import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterTwo from "@/src/layout/footers/footer-2";
import service_data from "@/src/data/service-data";
import { useRouter } from "next/router";
import FaqArea from "../homes/home/faq-area";
import HeaderTwo from "@/src/layout/headers/header-2";

const ServiceDetails = () => {
  const router = useRouter();
  const slug = router.query.id;
  const index = service_data.findIndex((service) => service.slug=== slug);
  const data = service_data[index];
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb
          top_title={service_data[index]?.title}
          page_title={service_data[index]?.subTitle}
          imgName={service_data[index]?.banner}
        />
        <ServiceDetailsArea />
        <FaqArea heading={data?.faq_heading} answerQuestionData={data?.faq} />
        <FooterContact bg_style={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default ServiceDetails;

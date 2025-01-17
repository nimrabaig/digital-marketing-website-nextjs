import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import React, { useEffect } from "react";
import ServiceDetailsArea from "./service-details-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterTwo from "@/src/layout/footers/footer-2";
import sub_service_data from "@/src/data/service-data";
import { useRouter } from "next/router";
import FaqArea from "../homes/home/faq-area";
import HeaderTwo from "@/src/layout/headers/header-2";

const ServiceDetails = () => {
  const router = useRouter();
  const slug = router.query.id;
  const index = sub_service_data.findIndex((service) => service.slug === slug);
  const data = sub_service_data[index];

  useEffect(() => {
    if (slug && !data) router.push("/404");
  }, [slug, data]);

  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb
          top_title={sub_service_data[index]?.title}
          page_title={sub_service_data[index]?.subTitle}
          imgName={sub_service_data[index]?.banner}
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

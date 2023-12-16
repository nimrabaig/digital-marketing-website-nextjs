import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import ServiceDetails from "../../components/service-details";
import { useRouter } from "next/router";


const index = () => {
  const seo = [
    {
      id: 1,
      title_1: "Lumenta Digital SEO: The Future of Search Engine Optimization",
      title_2:
        "Lumenta Digital SEO: A Game-Changer for Your Online Marketing Strategy",
      description:
        "Soar to success with Lumenta Digital's SEO excellence. Transform clicks into conversions!",
    },
    {
      id: 2,
      title_1: "The Future of Web Design: Emerging Technologies and Innovations",
  
      title_2: "Unleashing the Power of UI/UX Design in Web Development",
      description:
        "Your revenue potential is directly linked to your website. Don't miss out on sales and leads—partner with Lumenta Digital's web development team.",
    },
    {
      id: 3,
      title_1:
        "The Ultimate Guide to Social Media Marketing with Lumenta Digital",
      title_2:
        "Lumenta Digital: Your One-Stop Shop for Social Media Marketing Success",
      description:
        "Craft a compelling brand narrative and connect with your target audience through the expertise of Lumenta Digital's social media marketing services.",
    },
    {
      id: 4,
      title_1:
        "The Ultimate Guide to Pay Per Click Advertising on Lumenta Digital",
      title_2:
        "Pay Per Click Advertising on Lumenta Digital: A Comprehensive Overview",
      description:
        "Instantly boost your business, maximize ROI with proven PPC strategies from Lumenta Digital, and achieve unparalleled results by driving targeted traffic.",
    },
  ];
  const router = useRouter();
  const index = router.query.id - 1;
  console.log(seo[index]?.title_1);
  return (
    <Wrapper>
      <SEO
        pageTitle={seo[index]?.title_1}
        description={seo[index]?.description}
      />
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;

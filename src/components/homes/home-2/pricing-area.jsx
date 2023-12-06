import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import LineArrowTwo from "@/src/svg/line-arrow-2";
import Plus from "@/src/svg/plus";
import Minus from "@/src/svg/minus";
import offer_shape_1 from "@assets/img/offering/shape.png";
import offer_shape_2 from "@assets/img/offering/shape-2.png";
import { useRouter } from "next/router";

const pricing_data = [
  {
    id: 1,
    title: "SEO Silver",
    price: "$300",
    popular: false,
    contents: [
      {
        heading: "Website Audit",
        sub_contents: [
          "Website Analysis",
          "Duplicate Content Checks",
          "Backlink Audit",
          "Keyword Research",
          "Baseline Rank Report",
        ],
      },
      {
        heading: "On-Page Optimization",
        sub_contents: [
          "Sitemap Optimization",
          "Heading Optimization",
          "URL Optimization",
          "Image Optimization",
          "Google Analytics Code Implement",
          "Google Search Console Implement",
          "Canonicalization",
          "Image Optimization",
        ],
      },
      {
        heading: "Off-Page Optimization and Link Building",
        sub_contents: [
          "75 backlinks",
          "Profile Linking",
          "Article Submission",
          "Social Bookmarking",
          "Web 2.0 Blog Submission",
          "Image Sharing",
          "Video Submission",
          "Tier 2 Linking",
          "Citation Listing",
          "Quora Q/A",
          "Blog Commenting",
          "Ppt/Pdf Sharing",
          "Classified Posting",
        ],
      },
      {
        heading: "SEO Content Creation",
        sub_contents: [
          "Content Writing for Backlinks",
          "Social Media Accounts Set-up and Posting",
          "1 Facebook Post",
          "1 Instagram Post",
          "1 Twitter Post",
          "1 Pinterest Post",
          "1 Gmb Posting",
        ],
      },
      {
        heading: "Monthly Reporting",
        sub_contents: [
          "Initial Seo Audit Report",
          "Keywords Research Report",
          "On Page Optimization Report",
          "Monthly Link Building",
          "Monthly Ranking Reporting & Conversion Tracking",
        ],
      },
      {
        heading: "Customer Support",
        sub_contents: ["Phone Support", "Email Support", "Chat Support"],
      },
    ],
  },
  {
    id: 2,
    title: "SEO Gold",
    price: "$450",
    popular: false,
    contents: [
      {
        heading: "Website Audit",
        sub_contents: [
          "Website Analysis",
          "Duplicate Content Checks",
          "Backlink Audit",
          "Penalty Protection",
          "Keyword Research",
          "Keyword URL Mapping",
          "Baseline Rank Report",
        ],
      },
      {
        heading: "On-Page Optimization",
        sub_contents: [
          "Robot File Optimize",
          "Sitemap Optimization",
          "Heading Optimization",
          "URL Optimization",
          "Canonicalization",
          "Image Optimization",
          "Google Analytics Code Implement",
          "Google Search Console Implement",
          "Internal Linking",
          "Internal Linking & Optimization",
          "Check The Broken Links",
          "Favicon Creation",
          "Initial Link Analysis and Disavow",
        ],
      },
      {
        heading: "Off-Page Optimization and Link Building",
        sub_contents: [
          "150 Backlinks Monthly",
          "Profile Linking",
          "Article Submission",
          "Bookmarking",
          "Web 2.0 Blog Submission",
          "Image Sharing",
          "Tier 2 Linking",
          "Citation Listing",
          "Quora Q/A",
          "Blog Commenting",
          "1 Guest Posting",
        ],
      },
      {
        heading: "SEO Content Creation",
        sub_contents: [
          "Content Writing for Backlinks",
          "2 Website Blog Writing",
        ],
      },

      {
        heading: "Social Media Accounts Set-up and Posting",
        sub_contents: [
          "3 Facebook Post",
          "3 Instagram Post",
          "3 Twitter Post",
          "3 Pinterest Post",
        ],
      },
      {
        heading: "Monthly Reporting",
        sub_contents: [
          "Initial Seo Audit Report",
          "Keywords Research Report",
          "On Page Optimization Report",
          "Weekly Backlinks Progress Report",
          "Monthly Link Building",
          "Monthly Ranking Reporting & Conversion Tracking",
        ],
      },
      {
        heading: "Customer Support",
        sub_contents: ["Phone Support", "Email Support", "Chat Support"],
      },
    ],
  },

  {
    id: 3,
    title: "SEO Diamond",
    price: "$1000+",
    contents: [
      {
        heading: "Website Audit",
        sub_contents: [
          "Website Analysis",
          "Duplicate Content Checks",
          "Backlink Audit",
          "Penalty Protection",
          "Keyword Research",
          "Keyword URL Mapping",
          "Baseline Rank Report",
        ],
      },
      {
        heading: "On-Page Optimization",
        sub_contents: [
          "Robot File Optimize",
          "Sitemap Optimization",
          "Heading Optimization",
          "URL Optimization",
          "Canonicalization",
          "Image Optimization",
          "Google Analytics Code Implement",
          "Google Search Console Implement",
          "Google Map",
          "Internal Linking",
          "Schema Code Implementation",
          "Internal Linking & Optimization",
          "Bing Webmaster Tools Setup*",
          "Check The Broken Links",
          "Favicon Creation",
          "Initial Link Analysis and Disavow",
        ],
      },
      {
        heading: "Off-Page Optimization and Link Building",
        sub_contents: [
          "300 Backlinks Monthly",
          "Profile Linking",
          "Article Submission",
          "Bookmarking",
          "Web 2.0 Blog Submission",
          "Image Sharing",
          "Video Submission",
          "Tier 2 Linking",
          "Citation Listing",
          "Quora Q/A",
          "Blog Commenting",
          "Ppt/Pdf Sharing",
          "Classified Posting",
          "4 Guest Posting",
        ],
      },
      {
        heading: "SEO Content Creation",
        sub_contents: [
          "Content Writing for Backlinks",
          "2 Website Blog Writing",
          "Web Page Content Writing To Increase Keywords Density",
        ],
      },
      {
        heading: "Social Media Accounts Set-up and Posting",
        sub_contents: [
          "5 Facebook Post",
          "5 Instagram Post",
          "5 Twitter Post",
          "8 Pinterest Post",
          "4 Gmb Posting",
        ],
      },
      {
        heading: "Monthly Reporting",
        sub_contents: [
          "Initial Seo Audit Report",
          "Keywords Research Report",
          "On Page Optimization Report",
          "Weekly Backlinks Progress Report",
          "Monthly Link Building",
          "Monthly Ranking Reporting & Conversion Tracking",
        ],
      },
      {
        heading: "Customer Support",
        sub_contents: [
          "Phone Support",
          "Email Support",
          "Chat Support",
          "meeting",
        ],
      },
    ],
  },
];

const PricingArea = () => {
  const router = useRouter();
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [isExpanded, setExpandAll] = useState([]);

  // const toggleExpandAll = (cardId) => {
  //   setExpandAll((prev) => {
  //     if (prev === cardId) {
  //       return null;
  //     } else {
  //       return cardId;
  //     }
  //   });

  //   if (isExpanded === cardId) {
  //     console.log("1", openDropdowns);
  //     setOpenDropdowns((prev) => {
  //       return prev?.filter((item) => item.cardId !== cardId);
  //     });
  //   } else {
  //     const _array = pricing_data[cardId].contents.map((content, index) => ({
  //       cardId,
  //       headingIndex: index,
  //     }));
  //     setOpenDropdowns(_array);
  //   }
  // };
  // const toggleDropdown = (cardId, headingIndex) => {
  //   setExpandAll(null);
  //   setOpenDropdowns((prev) => {
  //     let isOpen;
  //     isExpanded === cardId
  //       ? (isOpen = prev?.some((item) => item.cardId === cardId))
  //       : (isOpen = prev?.some(
  //           (item) =>
  //             item.cardId === cardId && item.headingIndex === headingIndex
  //         ));

  //     if (isOpen) {
  //       console.log("====", openDropdowns);
  //       // If dropdown is open, close it
  //       setExpandAll(null);
  //       return prev?.filter(
  //         (item) =>
  //           !(item.cardId === cardId && item.headingIndex === headingIndex)
  //       );
  //     } else {
  //       // If dropdown is closed, close other dropdowns from other cards and open this one
  //       return prev
  //         ?.filter((item) => item.cardId === cardId)
  //         .concat({
  //           cardId,
  //           headingIndex,
  //         });
  //     }
  //   });
  // };

  const toggleExpandAll = (cardId) => {
    // setExpandAll((prev) => (prev === cardId ? null : cardId));

    // if (isExpanded !== cardId) {
    //   const _array = pricing_data[cardId].contents.map((content, index) => ({
    //     cardId,
    //     headingIndex: index,
    //   }));
    //   setOpenDropdowns(_array);
    // } else {
    //   setOpenDropdowns([]);
    // }

    //if isExpanded array has cardId then remove it and close all dropdowns of that card but dont remove any previous cardId or close any dropdowns of previous cardId
    // else add it and open all dropdowns of that card

    if (isExpanded.includes(cardId)) {
      setExpandAll((prev) => prev.filter((item) => item !== cardId));
      setOpenDropdowns((prev) => {
        return prev?.filter((item) => item.cardId !== cardId);
      });
    } else {
      setExpandAll((prev) => prev.concat(cardId));
      const _array = pricing_data[cardId].contents.map((content, index) => ({
        cardId,
        headingIndex: index,
      }));
      setOpenDropdowns((prev) => prev.concat(_array));
    }
  };

  const toggleDropdown = (cardId, headingIndex) => {
    // setExpandAll(null);

    setOpenDropdowns((prev) => {
      const isOpen = prev?.some(
        (item) => item.cardId === cardId && item.headingIndex === headingIndex
      );

      if (isOpen) {
        return prev?.filter(
          (item) =>
            !(item.cardId === cardId && item.headingIndex === headingIndex)
        );
      } else {
        // return prev
        //   ?.filter((item) => item.cardId === cardId)
        //   .concat({
        //     cardId,
        //     headingIndex,
        //   });
        return prev.concat({
          cardId,
          headingIndex,
        });
      }
    });
  };

  return (
    <>
      <section
        className="tp-offer-area p-relative pt-120 pb-90"
        style={{ backgroundImage: `url(/assets/img/offering/bg.png)` }}
      >
        <div className="tp-offer-overlay"></div>
        <div className="tp-offer-shape">
          <Image
            className="shape-1 d-none d-xl-block"
            src={offer_shape_1}
            alt="theme-pure"
          />
          <Image className="shape-2" src={offer_shape_2} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="tp-feature-title-wrapper">
                <h3 className="tp-section-title">
                  Our <span style={{ color: "#ff8d0b" }}>Pricing </span>Plans
                  {/* <span className="title-left-shape">
                    <LineArrowTwo />
                  </span> */}
                </h3>
                <p>
                  Explore our pricing plans, each with unique service offerings
                  to match your needs.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {pricing_data.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div
                  className={`tp-pricing-card mb-30 ${
                    item.popular ? "tp-popular-pricing" : ""
                  }`}
                >
                  <br></br>
                  <div className="tp-pricing-header">
                    <span className="pricing-title">{item.title}</span>
                    <p className="pricing-price">{item.price}</p>
                  </div>
                  <hr class="tp-pricing-seperator" />
                  <div className="tp-pricing-content">
                    <div
                      style={{
                        marginLeft: "auto",
                        color: "#ff8d0b",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleExpandAll(item.id)}
                    >
                      {isExpanded.includes(item.id)
                        ? "Collapse All"
                        : "Expand All"}
                    </div>
                    {item.contents.map((content, index) => (
                      <div key={index} className="pricing-content-section">
                        <div
                          className={
                            openDropdowns?.some(
                              (openDropdown) =>
                                openDropdown.cardId === item.id &&
                                openDropdown.headingIndex === index
                            )
                              ? "dropdown-open dropdown-heading"
                              : "dropdown-heading"
                          }
                          onClick={() => toggleDropdown(item.id, index)}
                        >
                          <h4>{content.heading}</h4>
                          {openDropdowns?.some(
                            (openDropdown) =>
                              openDropdown.cardId === item.id &&
                              openDropdown.headingIndex === index
                          ) ? (
                            <Minus />
                          ) : (
                            <Plus />
                          )}
                        </div>
                        <ul
                          className={
                            openDropdowns?.some(
                              (openDropdown) =>
                                openDropdown.cardId === item.id &&
                                openDropdown.headingIndex === index
                            )
                              ? "dropdown-open"
                              : ""
                          }
                        >
                          {content.sub_contents.map((subContent, idx) => (
                            <li key={idx}>{subContent}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link
                    className="tp-btn tp-btn-default mt-30"
                    // onClick={() => router.push("/contact")}
                    // style={{ lineHeight: 20 }}
                    href={{
                      pathname: "/contact",
                    }}
                  >
                    Purchase Now <br />
                    {item.title.split(" ")[1]} Plan
                  </Link>
                </div>
              </div>
            ))}

            {/* <div className="col-lg-12">
              <div className="tp-offer-all-btn text-center mt-30 fadeUp">
                <p>
                  Bring them together and you overcome the ordinary.
                  <Link href="/service-details">
                    View More Service
                    <span>
                      <i className="fa-regular fa-plus"></i>
                    </span>
                  </Link>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingArea;

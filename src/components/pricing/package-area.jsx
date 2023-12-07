import React, { useState } from "react";
import CheckIcon from "@assets/img/pricing/check.svg";
import CrossIcon from "@assets/img/pricing/cross.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const packages_data = [
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
    p1: [true, true, true, true, true, false, true],
    p2: [true, true, true, true, true, true, true],
    p3: [true, true, true, true, true, true, true],
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
      "Bing Webmaster Tools Setup",
      "Check The Broken Links",
      "Favicon Creation",
      "Initial Link Analysis and Disavow",
    ],
    p1: [
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      true,
      false,
      true,
      true,
      false,
      false,
    ],
    p2: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
    ],
    p3: [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
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
    p1: [
      75,
      false,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
    ],
    p2: [
      150,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      false,
      true,
      false,
      1,
    ],
    p3: [
      300,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      4,
    ],
  },
  {
    heading: "SEO Content Creation",
    sub_contents: [
      "Content Writing for Backlinks",
      "2 Website Blog Writing",
      "Web Page Content Writing To Increase Keywords Density",
    ],
    p1: [true, false, false],
    p2: [true, 2, false],
    p3: [true, 2, true],
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
    p1: [1, 1, 1, false, false],
    p2: [3, 3, 3, 3, false],
    p3: [5, 5, 5, 8, 4],
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
    p1: [true, true, true, false, true, true],
    p2: [true, true, true, true, true, true],
    p3: [true, true, true, true, true, true],
  },
  {
    heading: "Customer Support",
    sub_contents: ["Phone Support", "Email Support", "Chat Support", "meeting"],
    p1: [false, true, false, false],
    p2: [false, true, true, true],
    p3: [true, true, true, true],
  },
];

const PackageArea = () => {
  return (
    <>
      <div className={`container gridContainer`}>
        <div className={`row gridRow headerRow`}>
          <div className={`col gridColumn headerCell firstColumn`}>
            Services
          </div>
          <div className={`col gridColumn headerCell`}>SEO Silver</div>
          <div className={`col gridColumn headerCell`}>SEO Gold</div>
          <div className={`col gridColumn headerCell`}>SEO Diamond</div>
        </div>
        {packages_data.map((service, index) => (
          <>
            <div key={index} className={`row gridRow`}>
              <div className={`col gridColumn firstColumn`} style={{ color: "#ff8d0b" }}>
                {service.heading}
              </div>
              <div className={`col gridColumn `}></div>
              <div className={`col gridColumn `}></div>
              <div className={`col gridColumn `}></div>
            </div>

            {service.sub_contents.map((subContent, index) => (
              <div className={`row gridRow`}>
                <div className={`col gridColumn firstColumn`}>
                  <span>{subContent}</span>
                </div>
                <div className={`col gridColumn`}>
                  <span>
                    {service?.p1?.[index] == null ? (
                      <p></p>
                    ) : service?.p1?.[index] === true ? (
                      <Image src={CheckIcon} alt="" style={{ margin: 12 }} />
                    ) : service?.p1?.[index] === false ? (
                      <Image src={CrossIcon} alt="" style={{ margin: 12 }} />
                    ) : (
                      <span>{service?.p1?.[index]}</span>
                    )}
                  </span>
                </div>
                <div className={`col gridColumn `}>
                  <span>
                    {service?.p2?.[index] == null ? (
                      <p></p>
                    ) : service?.p2?.[index] === true ? (
                      <Image src={CheckIcon} alt="" style={{ margin: 12 }} />
                    ) : service?.p2?.[index] === false ? (
                      <Image src={CrossIcon} alt="" style={{ margin: 12 }} />
                    ) : (
                      <span>{service?.p2?.[index]}</span>
                    )}
                  </span>
                </div>
                <div className={`col gridColumn `}>
                  <span>
                    {service?.p3?.[index] == null ? (
                      <p></p>
                    ) : service?.p3?.[index] === true ? (
                      <Image src={CheckIcon} alt="" style={{ margin: 12 }} />
                    ) : service?.p3?.[index] === false ? (
                      <Image src={CrossIcon} alt="" style={{ margin: 12 }} />
                    ) : (
                      <span>{service?.p3?.[index]}</span>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </>
        ))}

        <div className={`row gridRow`}>
          <div className={`col gridColumn firstColumn`}></div>

          <div className={`col gridColumn`}>
            <Link
              className="package-btn mt-30"
              // onClick={() => router.push("/contact")}
              href={{
                pathname: "/contact",
              }}
            >
              Purchase Now 
            </Link>
          </div>

          <div className={`col gridColumn`}>
            <Link
              className="package-btn mt-30"
              // onClick={() => router.push("/contact")}
              href={{
                pathname: "/contact",
              }}
            >
              Purchase Now 
            </Link>
          </div>

          <div className={`col gridColumn`}>
            <Link
              className="package-btn mt-30"
              // onClick={() => router.push("/contact")}
              href={{
                pathname: "/contact",
              }}
            >
              Purchase Now 
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default PackageArea;

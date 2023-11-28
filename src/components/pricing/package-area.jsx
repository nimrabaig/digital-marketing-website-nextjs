import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const packages_data = [
  {
    id: 1,
    title: "SEO Silver",
    price: "$250",
    popular: false,
    contents: [
      {
        heading: "Website Audit",
        sub_contents: [
          "Website Analysis",
          "Duplicate Content Checks",
          "Backlink Audit",
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
          "Image Optimization",
          "Google Analytics Code Implement",
          "Google Search Console Implement",
          "Check The Broken Links",
          "Canonicalization",
          "Check The Broken Links",
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
          "Monthly Reporting",
          "Initial Seo Audit Report",
          "Keywords Research Report",
          "On Page Optimization Report",
          "Weekly Backlinks Progress Report",
          "Monthly Link Building",
          "Monthly Ranking Reporting & Conversion Tracking",
          "Customer Support",
          "Phone Support",
          "Email Support",
          "Chat Support",
        ],
      },
      {
        heading: "Social Media Accounts Set-up and Posting",
        sub_contents: [
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
    id: 2,
    title: "SEO Gold",
    price: "$450",
    popular: true,
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
          "150 Backlinks Monthly",
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
          "1 Guest Posting",
        ],
      },
      {
        heading: "SEO Content Creation",
        sub_contents: [
          "Content Writing for Backlinks",
          "2 Website Blog Writing",
          "Social Media Accounts Set-up and Posting",
          "3 Facebook Post",
          "3 Instagram Post",
          "3 Twitter Post",
          "3 Pinterest Post",
          "2 Gmb Posting",
          "Monthly Reporting",
          "Initial Seo Audit Report",
          "Keywords Research Report",
          "On Page Optimization Report",
          "Weekly Backlinks Progress Report",
          "Monthly Link Building",
          "Monthly Ranking Reporting & Conversion Tracking",
          "Customer Support",
          "Phone Support",
          "Email Support",
          "Chat Support",
        ],
      },
      {
        heading: "Social Media Accounts Set-up and Posting",
        sub_contents: [
          "3 Facebook Post",
          "3 Instagram Post",
          "3 Twitter Post",
          "3 Pinterest Post",
          "2 Gmb Posting",
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
    price: "$750",
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
          "Social Media Accounts Set-up and Posting",
          "5 Facebook Post",
          "5 Instagram Post",
          "5 Twitter Post",
          "8 Pinterest Post",
          "4 Gmb Posting",
          "Monthly Reporting",
          "Initial Seo Audit Report",
          "Keywords Research Report",
          "On Page Optimization Report",
          "Weekly Backlinks Progress Report",
          "Monthly Link Building",
          "Monthly Ranking Reporting & Conversion Tracking",
          "Customer Support",
          "Phone Support",
          "Email Support",
          "Chat Support",
          "meeting",
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
        sub_contents: ["Phone Support", "Email Support", "Chat Support"],
      },
    ],
  },
];

const PackageArea = () => {
  return (
    <>
      {/* grid table for packages(pricing plans) for contents(heading only)  */}

      <div className={`container gridContainer`}>
        <div className={`row gridRow headerRow`}>
          <div className={`col gridColumn headerCell firstColumn`}>
            Header 1
          </div>
          <div className={`col gridColumn headerCell`}>Header 2</div>
          <div className={`col gridColumn headerCell`}>Header 3</div>
          <div className={`col gridColumn headerCell`}>Header 4</div>
        </div>
        <div className={`row gridRow`}>
          <div className={`col gridColumn firstColumn`}>Row 1, Column 1</div>
          <div className={`col gridColumn`}>Row 1, Column 2</div>
          <div className={`col gridColumn`}>Row 1, Column 3</div>
          <div className={`col gridColumn`}>Row 1, Column 4</div>
        </div>
        <div className={`row gridRow`}>
          <div className={`col gridColumn firstColumn`}>Row 1, Column 1</div>
          <div className={`col gridColumn`}>Row 1, Column 2</div>
          <div className={`col gridColumn`}>Row 1, Column 3</div>
          <div className={`col gridColumn`}>Row 1, Column 4</div>
        </div>
        <div className={`row gridRow`}>
          <div className={`col gridColumn firstColumn`}>Row 1, Column 1</div>
          <div className={`col gridColumn`}>Row 1, Column 2</div>
          <div className={`col gridColumn`}>Row 1, Column 3</div>
          <div className={`col gridColumn`}>Row 1, Column 4</div>
        </div>
        <div className={`row gridRow`}>
          <div className={`col gridColumn firstColumn`}>Row 1, Column 1</div>
          <div className={`col gridColumn`}>Row 1, Column 2</div>
          <div className={`col gridColumn`}>Row 1, Column 3</div>
          <div className={`col gridColumn`}>Row 1, Column 4</div>
        </div>
        <div className={`row gridRow`}>
          <div className={`col gridColumn firstColumn`}>Row 1, Column 1</div>
          <div className={`col gridColumn`}>Row 1, Column 2</div>
          <div className={`col gridColumn`}>Row 1, Column 3</div>
          <div className={`col gridColumn`}>Row 1, Column 4</div>
        </div>
        <div className={`row gridRow`}>
          <div className={`col gridColumn firstColumn`}>Row 1, Column 1</div>
          <div className={`col gridColumn`}>Row 1, Column 2</div>
          <div className={`col gridColumn`}>Row 1, Column 3</div>
          <div className={`col gridColumn`}>Row 1, Column 4</div>
        </div>
        <div className={`row gridRow`}>
          <div className={`col gridColumn firstColumn`}>Row 2, Column 1</div>
          <div className={`col gridColumn`}>Row 2, Column 2</div>
          <div className={`col gridColumn`}>Row 2, Column 3</div>
          <div className={`col gridColumn`}>Row 2, Column 4</div>
        </div>
        <div className={`row gridRow`}>
          <div className={`col gridColumn firstColumn`}>Row 3, Column 1</div>
          <div className={`col gridColumn`}>Row 3, Column 2</div>
          <div className={`col gridColumn`}>Row 3, Column 3</div>
          <div className={`col gridColumn`}>Row 3, Column 4</div>
        </div>
        <div className={`row gridRow`}>
          <div className={`col gridColumn firstColumn`}>Row 4, Column 1</div>
          <div className={`col gridColumn`}>Row 4, Column 2</div>
          <div className={`col gridColumn`}>Row 4, Column 3</div>
          <div className={`col gridColumn`}>Row 4, Column 4</div>
        </div>

        {/* Repeat the above structure for other rows */}

        <div className={`row gridRow`}>
          <div className={`col gridColumn firstColumn`}></div>
          <div className={`col gridColumn`}>
            <button className="tp-btn tp-btn-default mt-30">
              Purchase Now
            </button>{" "}
          </div>
          <div className={`col gridColumn`}>
            <button className="tp-btn tp-btn-default mt-30">
              Purchase Now
            </button>{" "}
          </div>
          <div className={`col gridColumn`}>
            <button className="tp-btn tp-btn-default mt-30">
              Purchase Now
            </button>{" "}
          </div>
        </div>

        {/* <div className={`row gridRow lastRow`}>
          <div className={`col gridColumn`}></div>
          <div className={`col gridColumn`}>
            <button className="tp-btn tp-btn-default mt-30">
              Purchase Now
            </button>{" "}
          </div>
          <div className={`col gridColumn`}>
            <button className="tp-btn tp-btn-default mt-30">
              Purchase Now
            </button>{" "}
          </div>
          <div className={`col gridColumn`}>
            <button className="tp-btn tp-btn-default mt-30  buy-button">
              Purchase Now
            </button>{" "}
          </div>
        </div> */}
      </div>
    </>
  );
};
export default PackageArea;

import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import TeamDetailsArea from "./team-details-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import Footer from "@/src/layout/footers/footer-2";

const TeamDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="IT Advisor" page_title="Team Details" />
        <TeamDetailsArea />
        <FooterTwoContact bg_style={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default TeamDetails;

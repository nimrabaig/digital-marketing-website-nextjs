import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import TeamMembers from "./team-members";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterTwo from "@/src/layout/footers/footer-2";

const Team = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="IT Advisor" page_title="Team" />
        <TeamMembers />
        <FooterContact bg_style={true} />
      </main>
      <FooterTwo />
    </>
  );
};

export default Team;

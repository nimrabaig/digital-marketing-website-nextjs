import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import UnSubscribe from "../components/unsubscribe";

const index = () => {
  return (
    <Wrapper>
      <main>
        <UnSubscribe />
      </main>
      {/* <SEO pageTitle={"Unsubscribe"}/> */}
    </Wrapper>
  );
};

export default index;

import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import UnSubscribe from "../../components/unsubscribe";

const index = () => {
  return (
    <Wrapper>
    <SEO pageTitle={"Unsubscribe"}/>
      <main>
        <UnSubscribe />
      </main>
    </Wrapper>
  );
};

export default index;

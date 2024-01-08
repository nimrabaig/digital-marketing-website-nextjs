const { default: SEO } = require("../common/seo");
const { default: Wrapper } = require("../layout/wrapper");

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blog Details"} />
      <div
        style={{ margin: "20px auto", padding: "30px", fontSize: 14 }}
        className="col-xxl-12 col-lg-12 col-md-12"
      >
        <ul style={{ listStyleType: "none", margin: 20, }}>
          <li style={{ textAlign: "center",  }}>
            <b>Privacy Policy</b>
          </li>
          <li style={{ listStyleType: "none", marginBottom: 20,  }}>
            {" "}
            Last updated: January 5, 2024
          </li>
          <p style={{ fontSize: 14}}>
            We value your privacy and are committed to protecting your personal
            information. Please carefully read this Privacy Policy before using
            the https://lumentadigital.com/ website (the "Website") operated by
            Lumenta Digital Inc, a corporation formed in Ontario, Canada ("us,"
            "we," "our"). This Privacy Policy outlines how we collect, use, and
            safeguard your information.{" "}
          </p>
          <p style={{ fontSize: 14}}>
            Your access to and use of the Website is contingent upon your
            acceptance of and compliance with this Privacy Policy. This Privacy
            Policy applies to all visitors, users, and others who access or use
            the Website.
          </p>
          <p style={{ fontSize: 14}}>
            By accessing or using the Website, you agree to be bound by this
            Privacy Policy. If you disagree with any part of the Privacy Policy,
            please refrain from using the Website.
          </p>
          <p style={{ fontSize: 14}}>
            <b>Information Collection and Usage:</b>
            <br /> We collect personal information that is strictly necessary
            for the operation of our services. We do not combine or link
            personal information unless required by law.
          </p>
          <p style={{ fontSize: 14}}>
            <b>Information Sharing:</b> <br />
            We do not share or disclose your personal information to third
            parties.
          </p>
          <p style={{ fontSize: 14}}>
            <b>Security Measures: To protect your</b>
            <br />
            personal information, we have implemented the following measures:
            <br />
            <li style={{ listStyleType: "disc", marginLeft: 20 }}>
              Limiting the collection of personal information to what is
              strictly necessary.
            </li>
            <li style={{ listStyleType: "disc", marginLeft: 20 }}>
              {" "}
              Using SSL or other secure connection technologies for the
              transmission of personal information.
            </li>
            <li style={{ listStyleType: "disc", marginLeft: 20 }}>
              {" "}
              Regularly destroying personal information that is no longer
              needed.
            </li>
            <li style={{ listStyleType: "disc", marginLeft: 20 }}>
              Implementing and monitoring intrusion prevention and detection
              systems.
            </li>
            <li style={{ listStyleType: "disc", marginLeft: 20 }}> Maintaining up-to-date software and safeguards.</li>
          </p>
         <p style={{ fontSize: 14}}><b>Sale of Information:</b> <br />We do not sell your personal information. Please
          refer to the "Your Rights" section for information on exercising
          privacy rights related to the sale of your personal information.</p>
         <p style={{ fontSize: 14}}>
          <b>Cookies:</b><br /> Our Website uses cookies. To learn more about the cookies we
          collect, their purpose, and how to adjust your cookie settings, please
          refer to our Cookie Policy.</p> 
          
         <p style={{ fontSize: 14}}><b>Children's Privacy:</b><br /> Our Website is
          intended for a general audience and does not offer services to
          children under 18. If we receive personal information from a known
          child, we will use it only to respond and inform them that they cannot
          use the Website.</p>
          
         <p style={{ fontSize: 14}}><b>Analytics Programs:</b><br /> We use Google Analytics to
          collect information about user behavior. To opt out of Google
          Analytics, visit https://tools.google.com/dlpage/gaoptout/.</p>


         <p style={{ fontSize: 14}}><b>Information Retention:</b> We retain identifying information for a period
          of 60 days.</p>
          
         <p style={{ fontSize: 14}}><b> Direct Marketing:</b> We use collected information for direct
          marketing purposes. You can request to cease direct marketing by
          emailing us at info@lumentadigital.com.</p>
          
        <p style={{ fontSize: 14}}> <b>Your Rights:</b><br /> As a visitor or
          user of our Website, you have the following rights regarding your
          personal information: <br />
          <li style={{ listStyleType: "disc", marginLeft: 20 }}>Access to your collected personal information.</li>
          <li style={{ listStyleType: "disc", marginLeft: 20 }}>Knowledge of what personal information we have collected, its sources,
          purposes, and disclosure details. </li>
          <li style={{ listStyleType: "disc", marginLeft: 20 }}>The right to opt-out of the sale of
          your personal information. </li>
          <li style={{ listStyleType: "disc", marginLeft: 20 }}>The right to request deletion of some or
          all personal information.</li>
          <li style={{ listStyleType: "disc", marginLeft: 20 }}> The right not to be discriminated against
          for exercising privacy rights.</li>
          <li style={{ listStyleType: "disc", marginLeft: 20 }}> The right to equal service and pricing.</li>
          <li style={{ listStyleType: "disc", marginLeft: 20 }}>
          The right to request data transmission to another provider. </li>
          </p>
         <p style={{ fontSize: 14}}><b>Exercising
          Your Rights: </b><br />
           Submit consumer requests to:<br />
           <li style={{ listStyleType: "disc", marginLeft: 20 }}> Lumenta Digital Inc</li>
          <li style={{ listStyleType: "disc", marginLeft: 20 }}>info@lumentadigital.com</li>
          <li style={{ listStyleType: "disc", marginLeft: 20 }}> +1 (613) 807 - 2399</li>
          <li style={{ listStyleType: "disc", marginLeft: 20 }}>https://www.lumentadigital.com</li>
          </p>
          <p style={{ fontSize: 14}}><b>Complaints:</b><br /> Lodge complaints with us
          at info@lumentadigital.com or +1 (613) 807 - 2399. For Canadian
          residents, follow Office of the Privacy Commissioner of Canada's
          steps. </p>
         <p style={{ fontSize: 14}}><b>Location of Data Processing:</b> All data processing occurs in
          Canada. </p>
          
         <p style={{ fontSize: 14}}><b>Third-Party Websites:</b><br /> Our Website may contain hyperlinks to
          third-party websites. We are not responsible for their contents or
          privacy practices. Read and understand their Privacy Policies.</p>
          
          <p style={{ fontSize: 14}}><b>Do Not
          Track:</b> <br /> We support Do Not Track ("DNT"). Enable or disable DNT in your
          browser preferences.</p>
          <p style={{ fontSize: 14}}><b>Changes to Privacy Policy:</b>< br /> We reserve the right
          to amend this Privacy Policy. Changes will be posted on the Website.
          </p>
        <p style={{ fontSize: 14}}> <b>Questions:</b><br /> For questions about this Privacy Policy, contact us at
          info@lumentadigital.com.
          </p>
        </ul>
      </div>
    </Wrapper>
  );
};

export default PrivacyPolicy;

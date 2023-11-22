import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CONTACT_US, SUBSCRIBE_NEWS_LETTER } from "@/src/graphql/mutation";

import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import MuiPhoneNumber from "material-ui-phone-number-2";

const budgetRanges = [
  "$0 - $1000",
  "$1000 - $3000",
  "$3000 - $6000",
  "$6000 - $10,000",
  "$10,000+",
];

const serviceLabels = {
  seo: "SEO",
  ppc: "PPC",
  socialMedia: "Social Media",
  webDesign: "Web Design/Development",
  softwareDevelopment: "Software Development",
  contentWriting: "Content Writing",
  emailMarketing: "Email Marketing",
  linkBuilding: "Link Building",
};

const ContactForm = () => {
  const [ContactUs] = useMutation(CONTACT_US);
  const [SubscribetoNewsLetter] = useMutation(SUBSCRIBE_NEWS_LETTER);
  const [isSubscribed, setSubscribed] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    services: [],
    website: "",
    company: "",
    message: "",
  });

  const handleCheckboxChange = (service) => {
    const _services = [...values.services, service];
    setValues({
      ...values,
      services: _services,
    });
  };

  const handleBudgetChange = (event) => {
    setValues({ ...values, budget: event.target.value });
  };

  const handleOnSubscribe = async () => {
    // add mutation  "SubscribeNewsLetter"
    setSubscribed(!isSubscribed);
  };

  const onSubmit = async () => {
    // add mutation  "ContactUs"
    // ...values , isSubscribed

    const input = {
      //from values state
      name: values.name,
      email: values.email,
      phone: values.phone,
      budget: values.budget,
      services: values.services,
      website: values.website,
      company: values.company,
      message: values.message,
      isSubscribed: isSubscribed,
      // countryCode: values.countryCode,
    };

    try {
      const { data } = await ContactUs({ variables: { input } });
      // console.log("New user created:", data.createUser);

      if (isSubscribed) {
        const subscribtionData = {
          name: values.name,
          email: values.email,
        };

        try {
          const { data } = await SubscribetoNewsLetter({
            variables: { subscribtionData },
          });
          // console.log("New user subcribed:", data.createUser);
          // Handle success
        } catch (error) {
          console.log("Error creating subscribtion:", error);
          // Handle error
        }
      }
      // Handle success
    } catch (error) {
      console.log("Error creating user:", error);
      // Handle error
    }
  };

  return (
    <>
      <form id="contact-form" onClick={(e) => e.preventDefault()} method="POST">
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <div className="tp-contact-input">
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                required
                value={values.name}
                onChange={({ target }) =>
                  setValues({ ...values, name: target.value })
                }
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                required
                type="email"
                value={values.email}
                onChange={({ target }) =>
                  setValues({ ...values, email: target.value })
                }
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <MuiPhoneNumber
                countryCodeEditable={false}
                label="Phone Number"
                variant="outlined"
                required={true}
                defaultCountry="ca"
                value={values.phone}
                onChange={({ target }) =>
                  setValues({ ...phone, name: target.value })
                }
                style={{ backgroundColor: "#EFF0F2" }}
                onBlur={(e) => {}}
                // onChange={(value) => handleChange(name, value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <TextField
                id="outlined-basic"
                label="Website"
                variant="outlined"
                style={{ width: "100%" }}
                value={values.website}
                onChange={({ target }) =>
                  setValues({ ...values, website: target.value })
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <TextField
                id="outlined-basic"
                label="Company/Business Name"
                variant="outlined"
                style={{ width: "100%" }}
                value={values.company}
                onChange={({ target }) =>
                  setValues({ ...values, company: target.value })
                }
              />
            </div>
          </div>
          <div className="col-md-12">
            <FormGroup>
              <h6 style={{ fontFamily: "inherit" }}>
                What services can we provide you?
              </h6>
              <div className="col-md-12">
                {Object.entries(serviceLabels).map(([key]) => (
                  <FormControlLabel
                    key={key}
                    control={
                      <Checkbox
                        checked={values.services.includes(serviceLabels[key])}
                        onClick={() => handleCheckboxChange(serviceLabels[key])}
                        sx={{
                          "&.Mui-checked": {
                            color: "#ff8d0b",
                          },
                        }}
                      />
                    }
                    label={serviceLabels[key]}
                  />
                ))}
              </div>
            </FormGroup>
          </div>
          <FormControl>
            <h6 style={{ marginTop: 20, fontFamily: "inherit" }}>Budget*</h6>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              // value={value}
              // onChange={handleChange}
            >
              {budgetRanges.map((value) => (
                <FormControlLabel
                  key={value}
                  value={value}
                  control={
                    <Radio
                      checked={values.budget === value}
                      sx={{ "&.Mui-checked": { color: "#ff8d0b" } }}
                      onClick={handleBudgetChange}
                    />
                  }
                  label={value}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div className="col-md-12">
            <div className="tp-contact-textarea">
              <TextField
                placeholder="Message"
                multiline
                rows={4}
                style={{ width: "100%" }}
              />
            </div>
          </div>

          <FormControlLabel
            control={
              <Checkbox
                checked={isSubscribed}
                onClick={() => handleOnSubscribe()}
                sx={{
                  "&.Mui-checked": {
                    color: "#ff8d0b",
                  },
                }}
              />
            }
            label={"Subscribe tou our Newsletter"}
          />

          <br />

          <div className="tp-contact-btn mt-10">
            <button type="submit" className="tp-btn" onClick={onSubmit}>
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default ContactForm;

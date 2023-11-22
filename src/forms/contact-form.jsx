import React, { useCallback, useState } from "react";
import { useMutation } from "@apollo/client";
import { CONTACT_US, SUBSCRIBE_NEWS_LETTER } from "@/src/graphql/mutation";
import toast from "react-hot-toast";
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
    let _services = [];
    if (values.services.includes(service)) {
      const _filtered = values.services.filter(
        (_service) => _service !== service
      );
      _services = _filtered;
    } else _services = [...values.services, service];
    setValues({
      ...values,
      services: _services,
    });
  };

  const handleBudgetChange = (event) => {
    setValues({ ...values, budget: event.target.value });
  };

  const handleOnSubscribe = useCallback(() => {
    setSubscribed(!isSubscribed);
    SubscribetoNewsLetter({
      variables: { name: values.name, email: values.email },
    })
      .then((response) => {
        if (isSubscribed)
          toast.success("You have subscribed to our Newsletter!");
        else toast.success("You have unsubscribed to our Newsletter!");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isSubscribed]);

  const onSubmit = () => {
    toast.loading("Sending request...");
    ContactUs({
      variables: { ...values, isSubscribed },
    })
      .then((resp) => {
        toast.dismiss();
        if (resp.data?.ContactUs?.success) {
          toast.success("Mesaage sent!");
        } else {
          toast.error(resp.data?.ContactUs?.raw?.message);
        }
        console.log(resp);
      })
      .catch((err) => {
        toast.dismiss();
        toast.error("Unable to send message. Try again!");
        console.log(err);
      });
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
                onChange={(event) =>
                  setValues({ ...values, name: event.target.value })
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
                onChange={(phone) => setValues({ ...values, phone: phone })}
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

          <div style={{ marginBottom: 40 }} />

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

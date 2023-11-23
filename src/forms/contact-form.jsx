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
import Typography from "@mui/material/Typography";

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

  const [validation, setValidation] = useState({
    name: { error: false, helperText: "" },
    email: { error: false, helperText: "" },
    phone: { error: false, helperText: "" },
    budget: { error: false, helperText: "" },
  });

  const handleInputChange = (field, value) => {
    setValues((prevValues) => ({ ...prevValues, [field]: value }));
    setValidation((prevValidation) => ({
      ...prevValidation,
      [field]: { error: false, helperText: "" },
    }));
  };

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
    setValidation((prevValidation) => ({
      ...prevValidation,
      budget: { error: false, helperText: "" },
    }));
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
    let isValid = true;

    // Validate name
    if (values.name.trim() === "") {
      setValidation((prevValidation) => ({
        ...prevValidation,
        name: { error: true, helperText: "Name is required" },
      }));
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(values.email)) {
      setValidation((prevValidation) => ({
        ...prevValidation,
        email: { error: true, helperText: "Invalid email address" },
      }));
      isValid = false;
    }

    // Validate phone
    const phoneRegex =
      /^\+\d{1,3}\s?(\(\d{1,}\))?\s?\d{1,}[-\s]?\d{1,}[-\s]?\d{1,}$/;
    if (!phoneRegex.test(values.phone)) {
      setValidation((prevValidation) => ({
        ...prevValidation,
        phone: { error: true, helperText: "Invalid phone number" },
      }));
      isValid = false;
    }

    // Validate budget
    if (values.budget.trim() === "") {
      setValidation((prevValidation) => ({
        ...prevValidation,
        budget: { error: true, helperText: "Please select a budget" },
      }));
      isValid = false;
    }
    if (isValid) {
      toast.loading("Sending request...");
      ContactUs({
        variables: { ...values, isSubscribed },
      })
        .then((resp) => {
          toast.dismiss();
          if (resp.data?.ContactUs?.success) {
            toast.success("Message sent!");
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
    } else {
      toast.error("Please fill all the required fields");
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
                error={validation.name.error}
                helperText={validation.name.helperText}
                value={values.name}
                onChange={(event) =>
                  handleInputChange("name", event.target.value)
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
                error={validation.email.error}
                helperText={validation.email.helperText}
                onChange={(event) => {
                  handleInputChange("email", event.target.value);
                }}
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
                error={validation.phone.error}
                onChange={(phone) => handleInputChange("phone", phone)}
                style={{ backgroundColor: "#EFF0F2" }}
                onBlur={(e) => {}}
              />
              {validation.phone.error && (
                <Typography variant="body2" color="#d32f2f !important">
                  {validation.phone.helperText}
                </Typography>
              )}
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
            {validation.budget.error && (
              <Typography variant="body2" color="#d32f2f !important">
                {validation.budget.helperText}
              </Typography>
            )}
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
            label={"Subscribe to our Newsletter"}
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

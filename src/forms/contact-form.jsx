import React from "react";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

const ContactForm = () => {
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
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                required
                style={{ width: "100%" }}
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
              />
            </div>
          </div>
          <div className="col-md-12">
            <FormGroup>
              <h6 style={{ fontFamily: "inherit" }}>
                What Services can we Provide you?
              </h6>
              <div className="col-md-12">
                <FormControlLabel control={<Checkbox />} label="SEO" />
                <FormControlLabel control={<Checkbox />} label="PPC" />
                <FormControlLabel control={<Checkbox />} label="Social Media" />

                <FormControlLabel
                  control={<Checkbox />}
                  label="Web Design/Development,"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Software Development"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Content Writing"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Email Marketing"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Link building"
                />
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
              <FormControlLabel
                value="$0 - $1000"
                control={<Radio />}
                label="$0 - $1000"
              />
              <FormControlLabel
                value="$1000 - $3000"
                control={<Radio />}
                label="$1000 - $3000"
              />
              <FormControlLabel
                value="$3000 - $6000"
                control={<Radio />}
                label="$3000 - $6000"
              />
              <FormControlLabel
                value="$6000 - $10,000"
                control={<Radio />}
                label="$6000 - $10,000"
              />
              <FormControlLabel
                value="$10,000+"
                control={<Radio />}
                label="$10,000+"
              />
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

          <br />

          <div className="tp-contact-btn mt-10">
            <button type="submit" className="tp-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;

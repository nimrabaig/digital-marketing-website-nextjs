import React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const options = [
  {
    value: "1",
    label: "I no longer wish to receive these emails",
  },
  {
    value: "2",
    label:
      "The emails are no longer the content that I originally signed up for",
  },
  {
    value: "3",
    label:
      "I never gave permission to receive these emails, please report this as abuse",
  },
  {
    value: "4",
    label: "I unsubsribed by accident! Please add me back to this list",
  },
  {
    value: "5",
    label: "Other",
  },
];

const UnSubsribe = () => {
  const [values, setValues] = React.useState({
    budget: "",
  });
  const handleBudgetChange = (event) => {
    setValues({ ...values, budget: event.target.value });
  };
  return (
    <form
      id="unsubscribe-form"
      onClick={(e) => e.preventDefault()}
      method="POST"
      className="container-fluid tp-form-wrap tp-form-wrap-one unsubscribe-form"
    >
      <div className="row tp-gx-10">
        <div className="col-md-12 text-center unsubsribe-form-container">
          <div>
            <FormControl>
              <h6
                style={{
                  marginTop: 20,
                  fontFamily: "inherit",
                  fontWeight: 700,
                }}
              >
                <Typography variant="h6" gutterBottom component="div">
                  You have been unsubscribed from this list.
                  <br />
                  Please take a moment and let us know why you unsubscribed.
                </Typography>
              </h6>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
              >
                {options.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={
                      <Radio
                        checked={values.budget === option.value}
                        sx={{ "&.Mui-checked": { color: "#ff8d0b" } }}
                        onClick={handleBudgetChange}
                      />
                    }
                    label={option.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <div className="col-md-12 text-center ">
              <div className="tp-contact-textarea">
                <TextField
                  placeholder="Message"
                  multiline
                  rows={4}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="unsunscribe-btn-container">
              <button type="submit" className="unsubscribe-btn">
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default UnSubsribe;

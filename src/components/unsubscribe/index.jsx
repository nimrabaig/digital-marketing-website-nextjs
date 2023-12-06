import React, { useEffect, useState } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  SUBSCRIBE_BY_ID,
  UNSUBSCRIBE,
  UNSUBSCRIBE_WITH_FEEDBACK,
} from "@/src/graphql/mutation";
import { toast } from "react-hot-toast";

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
  const router = useRouter();
  const id = router.query.id;
  console.log("--fds id", id)
  const [option, setOption] = useState(null);
  const [feedback, setFeedback] = React.useState("");
  const [Unsubscribe] = useMutation(UNSUBSCRIBE);
  const [UnsubscribeWithFeedback] = useMutation(UNSUBSCRIBE_WITH_FEEDBACK);
  const [SubscribeAgain] = useMutation(SUBSCRIBE_BY_ID);

  useEffect(() => {
    if (id) unsubscribeNewsletter();
  }, [id]);

  const handleOption = (event) => {
    setOption(event.target.value);
  };
  const unsubscribeNewsletter = () => {
    Unsubscribe({
      variables: {
        contactId: id,
      },
    });
  };

  const SubmitFeedback = () => {
    if (option === null) {
      toast.error("Please select a valid option");
    } else if (option === "4") {
      SubscribeAgain({
        variables: {
          contactId: id,
        },
      }).then((resp) => {
        if (resp?.data?.SubscribeToNewsletter?.success) {
          toast.success("You have subscribed to our Newsletter again!");
          router.push("/");
        }
      });
    } else {
      UnsubscribeWithFeedback({
        variables: {
          contactId: id,
          feedbackOptionId: parseInt(option),
          reason: feedback,
        },
      })
        .then((response) => {
          if (response?.data?.SubmitUnsubscribeFeedback?.success) {
            toast.success("You have unsubscribved to our Newsletter.");
            router.push("/");
          } else {
            toast.error("Oops! Something went wrong.");
          }
        })
        .catch((e) => {
          toast.error("Oops! Something went wrong.");
        });
    }
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
              <h5
                style={{
                  marginTop: 20,
                  fontFamily: "inherit",
                  fontWeight: 700,
                  marginBottom: 20,
                }}
              >
                <Typography variant="h5" gutterBottom component="div">
                  You have been unsubscribed from our emails.
                  <br />
                  Please take a moment and let us know why you unsubscribed.
                </Typography>
              </h5>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange}
              >
                {options.map((_option) => (
                  <FormControlLabel
                    key={_option.value}
                    value={_option.value}
                    control={
                      <Radio
                        checked={option === _option.value}
                        sx={{ "&.Mui-checked": { color: "#ff8d0b" } }}
                        onClick={handleOption}
                        defaultChecked={true}
                      />
                    }
                    label={_option.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            {option === "5" && (
              <div className="col-md-12 text-center ">
                <div className="tp-contact-textarea">
                  <TextField
                    placeholder="Message"
                    multiline
                    rows={4}
                    style={{ width: "100%" }}
                    onChange={(event) => setFeedback(event.target.value)}
                    value={feedback}
                  />
                </div>
              </div>
            )}
            <div className="unsunscribe-btn-container">
              <button
                type="submit"
                className="unsubscribe-btn"
                onClick={SubmitFeedback}
              >
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

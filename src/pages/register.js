import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import Header from "../components/header";
import Footer from "../components/footer";

import { useForm, Form } from "../hooks/useForm";
import AddPhoneNumbers from "./AddPhoneNumbers";

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  gender: "",
  email: "",
  staffId: "",
  zone: "",
};

export default function Register() {
  const [checked, setChecked] = useState(false);
  const { values, setValues, handleChange } = useForm(initialValues);
  const [addScreen, setAddScreen] = useState(false);
  const [views, setViews] = useState(true);

  const goToNextPage = () => {
    setViews(false);
    setAddScreen(true);
    setChecked(!checked);
  };

  const addComponent = addScreen ? <AddPhoneNumbers /> : null;
  return (
    <div>
      <Header />
      <div className="itex-banner2">
        <div className="itex-banner-cover">
          <div className="itex-banner-text">
            Nigerian Police Force CUG registration form
          </div>
        </div>
      </div>
      <div class="itex-form-section wf-section">
        <div class="itex-form">
          <div class="itex-form-header">Please enter your details below
          <p className="itex-form-subheader">Disclaimer: Any information inputted is confidential and not to be re-shared with any party.</p>
          </div>

          <div>
            <Form>
                {views === true ? (
                  <>
                    <div className="radio-div">
                      <FormControl component="fieldset">
                        <RadioGroup
                          name="radio-buttons-group gender"
                          value={values.gender}
                          onChange={handleChange}
                          row
                        >
                          <FormControlLabel
                            style={{ marginRight: "100px" }}
                            value="individual"
                            control={<Radio style={{ color: "#132EBA" }} />}
                            label="Individual"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="individual-form">
                    <TextField
                      className="textfield-control"
                      id="outlined-basic"
                      label="First Name *"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      className="textfield-control"
                      id="outlined-basic"
                      label="Last Name *"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      className="textfield-control"
                      id="outlined-basic"
                      label="Phone Number *"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      className="textfield-control"
                      id="outlined-basic"
                      label="Police Staff ID *"
                      name="staffId"
                      value={values.staffId}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      className="textfield-control"
                      id="outlined-basic"
                      label="Email Address"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Zone
                      </InputLabel>
                      <Select
                        className="textfield-control"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Zone"
                        name="zone"
                        value={values.zone}
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Zone 1</MenuItem>
                        <MenuItem value={20}>Zone 2</MenuItem>
                        <MenuItem value={30}>Zone 3</MenuItem>
                      </Select>
                    </FormControl>

                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox onClick={goToNextPage} checked={checked} />
                        }
                        label="Add phone numbers"
                      />
                    </FormGroup>
                    </div>
                  </>
                ) : null}
                {addComponent}
              
            </Form>
          </div>
          <button type="submit" class="itex-form-submit-btn">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

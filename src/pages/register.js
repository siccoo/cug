import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Header from "../components/header";
import Footer from "../components/footer";
import Zones from "./zones/Zones";

import { useForm, Form } from "../hooks/useForm";

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
  const [areas, setStates] = useState([]);
  const [nigeriaZones, setNigeriaZones] = useState("");
  const [nigeriaStates, setNigeriaStates] = useState("");
  const { values, setValues, handleChange, errors, setErrors } = useForm(initialValues);

  const zoneList = Object.keys(Zones).map((key) => ({
    name: key,
  }));

  const validate = () => {
    let temp = {};
    temp.firstName = values.firstName ? "" : "First Name Required";
    temp.lastName = values.lastName ? "" : "Last Name Required";
    temp.email = /$|.+@.+..+/.test(values.email)
      ? ""
      : "The Email field is not a valid e-mail address.";
    temp.phoneNumber =
      values.phoneNumber.length > 10
        ? ""
        : "Enter a valid phone number, Maximum 11 digits";
    temp.staffId =
      values.staffId > 5 ? "" : "Police Staff ID Max. characters 6";

    setErrors({
      ...temp
    })
  };

  const handleZonesSelect = (e) => {
    const zoneSel = e.target.value;
    const stateSel = zoneSel !== "" ? Zones[zoneSel] : "";
    setNigeriaZones(zoneSel);
    setStates(stateSel);
    setNigeriaStates("");
  };

  const handleStatesSelect = (e) => {
    const stateSel = e.target.value;
    setNigeriaStates(stateSel);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

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
          <div class="itex-form-header">
            Please enter your details below
            <p className="itex-form-subheader">
              Disclaimer: Any information inputted is confidential and not to be
              re-shared with any party.
            </p>
          </div>

          <div>
            <Form>
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
                  <InputLabel id="demo-simple-select-label">Zone</InputLabel>
                  <Select
                    className="textfield-control"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Zone"
                    value={nigeriaZones}
                    onChange={(e) => handleZonesSelect(e)}
                  >
                    <MenuItem value="">Select Zones</MenuItem>
                    {zoneList.map((zone, key) => (
                      <MenuItem key={key} value={zone.name}>
                        {zone.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">State</InputLabel>
                  <Select
                    className="textfield-control"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Zone"
                    onChange={(e) => {
                      handleStatesSelect(e);
                    }}
                    value={nigeriaStates}
                  >
                    {areas.map((state, key) => (
                      <MenuItem key={key} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Form>
          </div>
          <button
            type="submit"
            class="itex-form-submit-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

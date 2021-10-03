import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Header from "../components/header";
import Footer from "../components/footer";
import Zones from "./zones/Zones";
import policeCugApi from "../utils/policeCugApi";
import { useForm, Form } from "../hooks/useForm";

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  gender: "",
  email: "",
  staffId: "",
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
      ...temp,
    });
  };

  const handleZonesSelect = (e) => {
    const zoneSel = e.target.value;
    const stateSel = zoneSel !== "" ? Zones[zoneSel] : "";
    setNigeriaZones(zoneSel);
    // console.log(zoneSel);
    setStates(stateSel);
    setNigeriaStates("");
  };

  const handleStatesSelect = (e) => {
    const stateSel = e.target.value;
    setNigeriaStates(stateSel);
    // console.log(stateSel);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // alert("testing...");
    // console.log(values, nigeriaStates, nigeriaZones);
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      staffId: values.staffId,
      email: values.email,
      zone: nigeriaZones,
      state: nigeriaStates
    }

    return policeCugApi({
      path: "https://localhost.8080",
      payload: data,
      method: "POST"
    }).then((result) => {
      console.log(result)
    }).catch((err) => console.log(err));
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
      <div className="itex-form-section wf-section">
        <div className="itex-form">
          <div className="itex-form-header">
            Please enter your details below
            <p className="itex-form-subheader">
              Disclaimer: Any information inputted is confidential and not to be
              re-shared with any party.
            </p>
          </div>

          <div>
            <Form onSubmit={handleSubmit}>
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
                        {zone.name.substring(0, 4)} {zone.name.slice(4)}
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
              <button type="submit" className="itex-form-submit-btn">
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

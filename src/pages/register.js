import React, { useState } from "react";
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
import Zones from "./zones/Zones";

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

export default function Register(props) {
  const [checked, setChecked] = useState(false);
  const { values, setValues, handleChange } = useForm(initialValues);
  const [addScreen, setAddScreen] = useState(false);
  const [views, setViews] = useState(true);

  const zoneList = Object.keys(Zones).map((key) => ({
    name: key,
  }));

  const handleZonesSelect = (e) => {
    props.zoneVal(e.target.value);
    const zoneSel = e.target.value;
    const stateSel = zoneSel !== "" ? Zones[zoneSel] : "";
    props.setNigeriaZones(zoneSel);
    props.setStates(stateSel);
    props.setNigeriaStates("");
  };

  const handleStatesSelect = (e) => {
    props.stateVal(e.target.value);
    const stateSel = e.target.value;
    props.setNigeriaStates(stateSel);
  };

  const goToNextPage = () => {
    setViews(false);
    setAddScreen(true);
    setChecked(!checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
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
          <div class="itex-form-header">
            Please enter your details below
            <p className="itex-form-subheader">
              Disclaimer: Any information inputted is confidential and not to be
              re-shared with any party.
            </p>
          </div>

          <div>
            <Form>
              {views === true ? (
                <>
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
                        class={props.zonesClassName}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Zone"
                        value={props.nigeriaZones}
                        onChange={(e) => handleZonesSelect(e)}
                      >
                        <MenuItem value="">
                          {props.zonesPlaceholder || "Select Zones"}
                        </MenuItem>
                        {zoneList.map((zone, key) => (
                          <MenuItem key={key} value={zone.name}>
                            {zone.name}
                          </MenuItem>
                        ))}

                        {/* <MenuItem value={20}>Zone 2</MenuItem>
                        <MenuItem value={30}>Zone 3</MenuItem>
                        <MenuItem value={10}>Zone 1</MenuItem>
                        <MenuItem value={20}>Zone 2</MenuItem>
                        <MenuItem value={30}>Zone 3</MenuItem>
                        <MenuItem value={40}>Zone 4</MenuItem>
                        <MenuItem value={50}>Zone 5</MenuItem>
                        <MenuItem value={60}>Zone 6</MenuItem>
                        <MenuItem value={70}>Zone 7</MenuItem> */}
                      </Select>
                    </FormControl>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        State
                      </InputLabel>
                      <Select
                        className="textfield-control"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Zone"
                        onChange={(e) => {
                          handleStatesSelect(e);
                        }}
                        class={props.statesClassName}
                        value={props.nigeriaStates}
                      >
                        {/* {props.areas.map(())} */}
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

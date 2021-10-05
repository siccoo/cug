import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Zones from "./zones/Zones";
import policeCugApi from "../utils/policeCugApi";
import { useForm, Form } from "../hooks/useForm";
import Success from "./success/Success";
import Failure from "./failure/Failure";

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
  const { values, handleChange, errors, setErrors } = useForm(initialValues);
  const [views, setViews] = useState(true);
  const [viewsSuccess, setViewsSuccess] = useState(false);
  const [viewsFailure, setViewsFailure] = useState(false);

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
    temp.nigeriaStates = nigeriaStates.length !== 0 ? "" : "Zone is required";
    temp.nigeriaZones = nigeriaZones.length !== 0 ? "" : "State is required";

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
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

    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      policeStaffId: values.staffId,
      email: values.email,
      zone: nigeriaZones,
      state: nigeriaStates,
    };

    console.log(data);

    return policeCugApi({
      path: "http://localhost:5000/user/create_user",
      payload: data,
      method: "POST",
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));

    // if(validate()) {

    // }
  };

  const successComponent = viewsSuccess ? <Success /> : null;
  const failureComponent = viewsFailure ? <Failure /> : null;

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
      {views === true ? (
        <>
          <div className="itex-form-section wf-section">
            <div className="itex-form">
              <div className="itex-form-header">
                Please enter your details below
                <p className="itex-form-subheader">
                  Disclaimer: Any information inputted is confidential and not
                  to be re-shared with any party.
                </p>
              </div>

              <div className="itex-form-box">
                <Form onSubmit={handleSubmit}>
                  <div className="individual-form">
                    <div>
                      <label className="label">
                        First Name <span>*</span>
                      </label>
                      <input
                        className="textfield-control"
                        id="outlined-basic"
                        name="firstName"
                        type="text"
                        value={values.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                      />
                    </div>

                    <div>
                      <label className="label">
                        Last Name <span>*</span>
                      </label>
                      <input
                        className="textfield-control"
                        id="outlined-basic"
                        name="lastName"
                        type="text"
                        value={values.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                      />
                    </div>

                    <div>
                      <label className="label">
                        Phone Number <span>*</span>
                      </label>
                      <input
                        className="textfield-control"
                        id="outlined-basic"
                        name="phoneNumber"
                        type="tel"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        error={errors.phoneNumber}
                      />
                    </div>
                    <div>
                      <label className="label">
                        Police Staff ID <span>*</span>
                      </label>
                      <input
                        className="textfield-control"
                        id="outlined-basic"
                        name="staffId"
                        type="text"
                        value={values.staffId}
                        onChange={handleChange}
                        error={errors.staffId}
                      />
                    </div>
                    <div>
                      <label className="label">
                        Email address <span>*</span>
                      </label>
                      <input
                        className="textfield-control"
                        id="outlined-basic"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        error={errors.email}
                      />
                    </div>

                    <div>
                      <label className="label">
                        Zone <span>*</span>
                      </label>
                      <select
                        className="textfield-control"
                        id="demo-simple-select"
                        value={nigeriaZones}
                        error={errors.nigeriaZones}
                        onChange={(e) => handleZonesSelect(e)}
                      >
                        <option value="">Force Headquarters</option>
                        {zoneList.map((zone, key) => (
                          <option key={key} value={zone.name}>
                            {zone.name.substring(0, 4)} {zone.name.slice(4)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="label">
                        State <span>*</span>
                      </label>
                      <select
                        className="textfield-control"
                        id="demo-simple-select"
                        value={nigeriaStates}
                        error={errors.nigeriaStates}
                        onChange={(e) => handleStatesSelect(e)}
                      >
                        <option value=""></option>
                        {areas.map((state, key) => (
                          <option key={key} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="itex-form-submit-btn">
                    Submit
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {successComponent}
      {failureComponent}
      <Footer />
    </div>
  );
}

import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Zones from "./zones/Zones";
import policeCugApi from "../utils/policeCugApi";
import { useForm, Form } from "../hooks/useForm";
import Success from "./success/Success";
import Failure from "./failure/Failure";
import Loader from "../components/Loader";

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
  const [views, setViews] = useState(true);
  const [viewsSuccess, setViewsSuccess] = useState(false);
  const [viewsFailure, setViewsFailure] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const { values, handleChange, setValues, errors, setErrors } =
    useForm(initialValues);

  const zoneList = Object.keys(Zones).map((key) => ({
    name: key,
  }));

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

  const handleValidation = () => {
    let input = values;
    let errors = {};
    let formIsValid = true;

    if (!input["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "First name required";
    }

    if (!input["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "Please enter your name.";
    }

    if (!input["email"]) {
      formIsValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        formIsValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["phoneNumber"]) {
      formIsValid = false;
      errors["phoneNumber"] = "Please enter your phone number.";
    }

    if (typeof input["phoneNumber"] !== "undefined") {
        
      var patterns = new RegExp(/^[0-9\b]+$/);
      if (!patterns.test(input["phoneNumber"])) {
        formIsValid = false;
        errors["phoneNumber"] = "Please enter only number.";
      }else if(input["phoneNumber"].length != 11){
        formIsValid = false;
        errors["phoneNumber"] = "Please enter valid phone number.";
      }
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonLoading(true);

    if (handleValidation()) {
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
        policeStaffId: values.staffId,
        email: values.email,
        zone: nigeriaZones,
        state: nigeriaStates,
      };

      return policeCugApi({
        path: process.env.REACT_APP_API_URL,
        payload: data,
        method: "POST",
      })
        .then((result) => {
          console.log(result);
          setViewsSuccess(true);
          setViews(false);
          setIsButtonLoading(false);
        })
        .catch((err) => {
          setViewsFailure(true);
          setViews(false);
          setIsButtonLoading(false);
        });
    } else {
      setIsButtonLoading(false);
    }

    // if(validate()) {

    // }
  };

  const backHome = () => {
    setViews(true);
    setViewsSuccess(false);
    setViewsFailure(false);

    setValues({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      gender: "",
      email: "",
      staffId: "",
    });

    setNigeriaZones("");
    setNigeriaStates("");
  };

  const successComponent = viewsSuccess ? <Success onClick={backHome} /> : null;
  const failureComponent = viewsFailure ? <Failure onClick={backHome} /> : null;

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
                <Form>
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
                      />
                      {errors.firstName && <small>{errors.firstName}</small>}
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
                      />
                      {errors.lastName && <small>{errors.lastName}</small>}
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
                        pattern="\/D/g,"
                        onChange={handleChange}
                      />
                      {errors.phoneNumber && (
                        <small>{errors.phoneNumber}</small>
                      )}
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
                      />
                      {errors.staffId && <small>{errors.staffId}</small>}
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
                      />
                      {errors.email && <small>{errors.email}</small>}
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
                  <button
                    type="button"
                    className="itex-form-submit-btn"
                    onClick={handleSubmit}
                  >
                    {isButtonLoading ? <Loader dark={false} /> : "Submit"}
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

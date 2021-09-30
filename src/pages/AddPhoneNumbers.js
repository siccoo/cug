import { FormControl, FormLabel } from "@mui/material";
import React from "react";
import { useForm, Form } from "../hooks/useForm";
import TextField from "@mui/material/TextField";

const AddScreen = (props) => {
  const { values, handleChange } = useForm(props);
  return (
    <div>
      <Form>
        <div className="phonenumbers-form">
          <FormControl>
            <FormLabel>Phone Number 1</FormLabel>
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
          </FormControl>
        </div>
      </Form>
    </div>
  );
};

export default AddScreen;

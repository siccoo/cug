import React from "react";
import Radio from "@mui/material/Radio";
import {RadioGroup as MuiRadioGroup} from "@mui/material/RadioGroup";
import { FormControl, FormControlLabel } from "@mui/material";


export default function RadioGroup(props) {
  const { name, label, value, onChange, items } = props;
  return (
    <FormControl component="fieldset">
      <MuiRadioGroup name={name} value={value} onChange={onChange} row>
        {items.map((item, index) => (
          <FormControlLabel
            style={{ marginRight: "100px" }}
            value={item.id}
            control={<Radio style={{ color: "#132EBA" }} />}
            label={item.title}
          />
        ))}

        {/* <FormControlLabel
                      value="corporate"
                      control={<Radio style={{ color: "#132EBA" }} />}
                      label="Corporate"
                    /> */}
      </MuiRadioGroup>
    </FormControl>
  );
}

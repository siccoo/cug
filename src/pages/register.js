import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Header from "../components/header";
export default function Register() {
  return (
    <div>
      <Header />
      <div class="itex-banner">
        <div class="itex-banner-cover">
          <div class="itex-banner-text">Nigerian Police Force CUG registration form</div>
        </div>
      </div>
      <div class="itex-form-section wf-section">
        <div class="itex-form">
          <div class="itex-form-header">Please enter your details below</div>
          <div>
            <form>
              <div className="radio-div">

                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    defaultValue="female"
                    name="radio-buttons-group"
                    row
                  >
                    <FormControlLabel style={{ marginRight: '100px' }} value="female" control={<Radio style={{ color: '#132EBA' }} />} label="Individual" />
                    <FormControlLabel value="male" control={<Radio style={{ color: '#132EBA' }} />} label="Corporation" />
                  </RadioGroup>
                </FormControl>
              </div>

              <div className="individual-form">
                <TextField
                  className="textfield-control"
                  id="outlined-basic"
                  label="Fist Name *"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  className="textfield-control"
                  id="outlined-basic"
                  label="Last Name *"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  className="textfield-control"
                  id="outlined-basic"
                  label="NIN Number *"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  className="textfield-control"
                  id="outlined-basic"
                  label="Police Staff ID *"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  className="textfield-control"
                  id="outlined-basic"
                  label="Email Address"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  className="textfield-control"
                  id="outlined-basic"
                  label="Sim Serial Number Address"
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
                    value="Zone"
                  >
                    <MenuItem value={10}>Zone 1</MenuItem>
                    <MenuItem value={20}>Zone 2</MenuItem>
                    <MenuItem value={30}>Zone 3</MenuItem>
                  </Select>

                </FormControl>
                <FormControl fullWidth>

                  <InputLabel id="demo-simple-select-label">Divisional HQ</InputLabel>
                  <Select
                    className="textfield-control"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Divisional HQ"
                    value="Divisional HQ"
                  >
                    <MenuItem value={10}>HQ 1</MenuItem>
                    <MenuItem value={20}>HQ 2</MenuItem>
                    <MenuItem value={30}>HQ 3</MenuItem>
                  </Select>

                </FormControl>
              </div>

            </form>
          </div>
          <button type="submit" class="itex-form-submit-btn">Submit</button>
        </div>
      </div>
    </div>

  )
}

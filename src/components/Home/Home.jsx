import { TextField } from '@mui/material'
import { React, useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const Home = () => {

  // State Variables for Homepage - This is what we'll send to filter the directory
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [jobRole, setJobRole] = useState("")
  const [workLocation, setWorkLocation] = useState("")
  const [division, setDivision] = useState("")
  const [department, setDepartment] = useState("")

  useEffect(() => {
    console.log('useEffect on Homepage')
  })

  return (
    <>

      <TextField id="standard-basc" label="Search" variant="standard" />
      <div className='searchArea'>
        <p>Search Area</p>
        <TextField id="standard-basc" label="Name" variant="standard" />
        <TextField id="standard-basc" label="Phone Number" variant="standard" />
        <TextField id="standard-basc" label="Job Role" variant="standard" />
        <TextField id="standard-basc" label="Work Location" variant="standard" />
        {/* <TextField id="standard-basc" label="Division" variant="standard" /> */}
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-label">Division</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Division"
          // onChange={handleChange}
          >
            <MenuItem>Division 1</MenuItem>
            <MenuItem>Division 2</MenuItem>
            <MenuItem>Division 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-label">Department</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Division"
          // onChange={handleChange}
          >
            <MenuItem>Department 1</MenuItem>
            <MenuItem>Department 2</MenuItem>
            <MenuItem>Department 3</MenuItem>
          </Select>
        </FormControl>
        {/* <TextField id="standard-basc" label="Department" variant="standard" /> */}
      </div>

    </>
  )
}

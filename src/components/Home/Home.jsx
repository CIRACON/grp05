import { TextField } from '@mui/material'
import { React, useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export const Home = () => {

  // State Variables for Homepage - This is what we'll send to filter the directory
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [jobRole, setJobRole] = useState("")
  const [workLocation, setWorkLocation] = useState("")
  const [division, setDivision] = useState("")
  const [department, setDepartment] = useState("")

  // Functions

  const handleSubmit = () => {
    console.log(
      `
      Name:${name},
      Phone Number:${phone},
      Job Role:${jobRole},
      Work Location:${workLocation},
      Division${division},
      Department${department},
      `
    )
  }



  useEffect(() => {
  })

  return (
    <>

      {/* Search inputs */}

      <div className='mt-10 w-40 grid gap-4 grid-cols-1 grid-rows-5 ml-[45px]'>

        <TextField
          id="standard-basc"
          label="Name"
          variant="standard"
          onChange={event => setName(event.target.value)}
        />
        <TextField
          id="standard-basc"
          label="Phone Number"
          variant="standard"
          onChange={event => setPhone(event.target.value)} />
        <TextField
          id="standard-basc"
          label="Job Role"
          variant="standard"
          onChange={event => setJobRole(event.target.value)} />
        <TextField
          id="standard-basc"
          label="Work Location"
          variant="standard"
          onChange={event => setWorkLocation(event.target.value)} />
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-label">Division</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Division"
            onChange={event => setDivision(event.target.value)}
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
            label="Department"
          // onChange={handleChange}
          >
            <MenuItem onChange={event => setDepartment(event.target.value)}>Department 1</MenuItem>
            <MenuItem onChange={event => setDepartment(event.target.value)}>Department 2</MenuItem>
            <MenuItem onChange={event => setDepartment(event.target.value)}>Department 3</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>

      </div>
      {/* <TextField id="standard-basc" label="Department" variant="standard" /> */}
      <div>
        <p>Map through filtered people here:</p>
      </div>
    </>
  )
}

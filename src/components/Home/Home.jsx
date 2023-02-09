import { TextField } from '@mui/material'
import { React, useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { getFilteredEmployees } from '../../Fetch';

import { Header } from '../Header/Header';
export const Home = () => {

  // State Variables for Homepage - This is what we'll send to filter the directory
  const [name, setName] = useState("")
  const [phone_number, setPhone] = useState("")
  const [job_role, setJobRole] = useState("")
  const [work_location, setWorkLocation] = useState("")
  const [division, setDivision] = useState("")
  const [department, setDepartment] = useState("")

  // Functions

  const handleSubmit = () => getFilteredEmployees(name, phone_number, job_role, work_location, division, department).then(res => console.log(res))



  useEffect(() => {
  })

  return (
    <>

      <Header />
      {/* Search inputs */}
      <div className='flex'>
        <div className='h-screen w-1/5 shadow-md'>
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
        </div>
        {/* <TextField id="standard-basc" label="Department" variant="standard" /> */}

        <div className='h-screen w-4/5'>
          {/* THIS WILL NEED TO MAP THROUGH EACH FILTERED PERSON CREATE GRID. */}
          <p className='mt-[50px]'>Map through filtered people here:</p>

          <div className="flex justify-center mt-[25px] mb-[25px]">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                <p className="text-gray-700 text-base mb-4">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>



        </div>
      </div>
    </>
  )
}
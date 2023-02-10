import { TextField } from '@mui/material'
import { React, useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { getFilteredEmployees } from '../../Fetch';
import { useNavigate } from "react-router-dom";

import { Header } from '../Header/Header';

export const Home = () => {
  const navigate = useNavigate()

  // State Variables for Homepage - This is what we'll send to filter the directory
  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const [phone_number, setPhone] = useState("")
  const [job_role, setJobRole] = useState("")
  const [work_location, setWorkLocation] = useState("")
  const [division, setDivision] = useState("")
  const [department, setDepartment] = useState("")
  const [employees, setEmployees] = useState([])

  // Functions

  // const handleSubmit = () => getFilteredEmployees(name, phone_number, job_role, work_location, division, department).then(res => console.log(res))

  const handleSubmit = () =>
    getFilteredEmployees(name, id, phone_number, job_role, work_location, division, department)
      .then(res => {
        setEmployees(res)
      })

  const handleEmployeePage = (employee) => navigate('/employeeProfile', {state: employee})


  useEffect(() => {
  })

  return (
    <>

      <Header />
      {/* Search inputs */}
      <div className='flex'>
        <div className='w-1/5 shadow-xl m-[14px]'>
          <div className='w-40 grid gap-4 grid-cols-1 grid-rows-5 ml-[45px]'>

            <TextField
              id="standard-basc"
              label="Name"
              variant="standard"
              onChange={event => setName(event.target.value)}
            />
            <TextField
              id="standard-basc"
              label="Employee Id"
              variant="standard"
              onChange={event => setId(event.target.value)}
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

        <div className='w-4/5 grid grid-cols-3 gap-2'>
          {/* THIS WILL NEED TO MAP THROUGH EACH FILTERED PERSON CREATE GRID. */}
          {employees.map(employee => {
            return (
              <div key={employee._id}>
                <div className='flex justify-center '>
                  <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-xl'>
                    <div className='p-6 flex flex-col justify-start' onClick={() => handleEmployeePage(employee)}>
                      <h5 className='text-gray-900 text-xl font-medium mb-2 mt-2 '>{employee.name}</h5>
                      <p className='text-gray-700 text-base mb-4'>Phone Number: {employee.phone_number}</p>
                      <p className='text-gray-700 text-base mb-4'>Job Role: {employee.job_role}</p>
                      <p className='text-gray-700 text-base mb-4'>Work Location: {employee.work_location}</p>
                      <p className='text-gray-700 text-base mb-4'>Division: {employee.division}</p>
                      <p className='text-gray-700 text-base mb-4'>Department: {employee.department}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </>
  )
}
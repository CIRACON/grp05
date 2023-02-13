import { TextField } from '@mui/material'
import { React, useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { getSearchResource } from '../../Fetch';
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
  const [work_location, setWorkLocation] = useState("All Work Locations")
  const [division, setDivision] = useState("All Divisions")
  /* eslint-disable no-unused-vars */ ////Remove
  const [department, setDepartment] = useState("All Departments")
  /* eslint-enable no-unused-vars */
  const [employees, setEmployees] = useState([])

  // Cascading drop downs - department is dependent on division
  const [cascadingWorkLocations, setCascadingWorkLocations] = useState([])
  const [cascadingDivision, setCascadingDivision] = useState([])
  const [departments, setDepartments] = useState({})
  const [cascadingDepartment, setCascadingDepartment] = useState([])

  // instead, load cascadingVariables on page load, THEN show departments based on division selected.
  useEffect(() => {
    getSearchResource('worklocations')
    .then(res => {
      setCascadingWorkLocations(res)
    })

    getSearchResource('divisions')
      .then(res => {
        setCascadingDivision(res)
      })

    getSearchResource('departments')
      .then(res => {
        setDepartments(res)
      })
  }, [])

  useEffect(() => {
    if (division) {
      setCascadingDepartment(departments[division])
    }
    // eslint-disable-next-line
  }, [division])

  // Functions
  const handleSubmit = () =>
    getFilteredEmployees(name, id, phone_number, job_role, work_location, division, department)
      .then(res => {
        setEmployees(res)
      })

  const handleCascadingDepartments = () => {
    if (cascadingDepartment)
      return cascadingDepartment.map((departmentItem) =>
        <MenuItem value={departmentItem}>{departmentItem}</MenuItem>)
  }

  const handleEmployeePage = (employee) => navigate('/employeeProfile', { state: employee })

  return (
    <>
      <Header />
      {/* Search inputs */}
      <div className='flex'>
        <div className='w-1/5 shadow-xl mt-[10px]'>
          <div className='w-42 grid grid-cols-1 grid-rows-5 ml-[10px] mr-[10px]'>


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

            <FormControl sx={{ m: 1, minWidth: 150 }}>
              <InputLabel>Work Location</InputLabel>
              <Select
                label="All Work Locations"
                value={work_location}
                onChange={event => { setWorkLocation(event.target.value) }}
              >
                <MenuItem value="All Work Locations">All Work Locations</MenuItem>
                {cascadingWorkLocations.map((workLocationItem) =>
                  <MenuItem value={workLocationItem}>{workLocationItem}</MenuItem>
                )}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
              <InputLabel>Division</InputLabel>
              <Select
                label="All Divisions"
                value={division}
                onChange={event => { setDivision(event.target.value) }}
              >
                <MenuItem value="All Divisions">All Divisions</MenuItem>
                {cascadingDivision.map((divisionItem) =>
                  <MenuItem value={divisionItem}>{divisionItem}</MenuItem>
                )}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 150 }}>
              <InputLabel>Department</InputLabel>
              <Select
                label="All Departments"
                value={department}
                onChange={event => setDepartment(event.target.value)}
              >
                <MenuItem value="All Departments">All Departments</MenuItem>
                {handleCascadingDepartments()}
              </Select>
            </FormControl>

            <Button variant="contained" className="" onClick={handleSubmit}>Submit</Button>
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
                      {/* <p className='text-gray-700 text-base mb-4'>Job Role: {employee.job_role}</p> */}
                      <p className='text-gray-700 text-base mb-4'>Work Location: {employee.work_location}</p>
                      {/* <p className='text-gray-700 text-base mb-4'>Division: {employee.division}</p> */}
                      {/* <p className='text-gray-700 text-base mb-4'>Department: {employee.department}</p> */}
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
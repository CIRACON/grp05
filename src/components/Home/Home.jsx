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
import { UserCircleIcon } from '@heroicons/react/24/solid'


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
          <div className=' sticky top-[106px] w-42 grid grid-cols-1 grid-rows-5 ml-[10px] mr-[10px]'>

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

        <div className='mt-[20px] w-4/5 grid grid-cols-3 gap-2'>
          {/* THIS WILL NEED TO MAP THROUGH EACH FILTERED PERSON CREATE GRID. */}
          {employees.map(employee => {
            return (
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-blue-100" onClick={() => handleEmployeePage(employee)}>
              <div className="flex flex-col items-center pb-10">
                <UserCircleIcon className="w-24 h-24 mb-3  mt-[5px] rounded-full shadow-lg text-[#8D99AE]" alt="Profile" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{employee.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{employee.job_role}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{employee.work_location}</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <p className='text-sm text-gray-500 truncate dark:text-gray-400'>{employee.phone_number}</p>
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
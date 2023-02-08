import { TextField } from '@mui/material'
import { React, useEffect } from 'react'

export const Home = () => {

  useEffect(() => {
    console.log('useEffect on Homepage')
  })

  return (
    <>

      <TextField id="standard-basc" label="Search" variant="standard" />

      {/* <h6>Collin suggested leaving this blank for now.</h6>
      <p>Show option to search: Either by name or job department or division? MVP is by name?</p>
      <p>Upon hitting enter, this searches the database and moves the user to another page EmployeeProfile</p>
      <p>Depending on their access level and who they are, they will see different information.</p>
      <p>Conditional Rendering.</p> */}

    </>
  )
}

import { TextField } from '@mui/material'
import { React, useEffect } from 'react'

export const Home = () => {

  useEffect(() => {
    console.log('useEffect on Homepage')
  })

  return (
    <>

      <TextField id="standard-basc" label="Search" variant="standard" />

    </>
  )
}

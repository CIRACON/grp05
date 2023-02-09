import { TextField } from '@mui/material'
import { React, useEffect } from 'react'
import { Header } from '../Header/Header';

export const Home = () => {

  useEffect(() => {
    console.log('useEffect on Homepage')
  })

  return (
    <>
      <Header />
      <TextField id="standard-basc" label="Search" variant="standard" />
    </>
  )
}

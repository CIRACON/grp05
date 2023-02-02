import React from 'react'
import { useEffect, useState } from 'react'
import { fetchAllPeople } from '../../Fetch'

export const Homepage = () => {

  useEffect(() => {
    fetchAllPeople().then(res => console.log(res))
  }, [])
    
  return (
    <>
    <div>Homepage</div>
    </>
  )
}

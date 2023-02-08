import React from 'react'
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate();

  // const handleUmbrella = () => {
  //   console.log('Navigating to /home')
  //   navigate("/Home")
  // }

  return (
    <>
      <p>Searchable Enterprise Directory</p>
      <img 
      style={{ width: 140, height: 80 }}
        src='https://www.travelers.com/assets/images/Travelers_share.jpg?imformat=generic'
        
      ></img>
    </>
  )
}

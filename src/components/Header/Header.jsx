import React from 'react'
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate();

  const handleUmbrella = () => {
    navigate("/Home")
  }

  return (
    <>
      <p>Searchable Enterprise Directory</p>
      <img 
      style={{ width: 140, height: 80 }}
        src='https://www.travelers.com/assets/images/Travelers_share.jpg?imformat=generic'
        onClick={handleUmbrella}
      ></img>
    </>
  )
}

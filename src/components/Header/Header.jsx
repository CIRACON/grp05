import React from 'react'
import { useNavigate } from "react-router-dom";
import default_profile_photo from "./default-profile-image.png"

export const Header = () => {

  const navigate = useNavigate();

  const handleUmbrella = () => {
    navigate("/Home")
  }

  // <img
  // style={{ width: 140, height: 80 }}
  // src='https://www.travelers.com/assets/images/Travelers_share.jpg?imformat=generic'
  // onClick={handleUmbrella}/>

  return (
    <>
      <div className="flex h-24 bg-[#f50101]">
        <div className="w-2/12 grid place-items-center">Search Bar</div>
        <div className="w-8/12 text-2xl grid place-items-center">
          Searchable Enterprise Directory
        </div>
        <div className="w-2/12 grid place-items-center">
          <img src={default_profile_photo} alt="Profile Photo"></img>
        </div>
      </div>
    </>
  )
}

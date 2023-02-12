import React from 'react'
import { useNavigate } from "react-router-dom";
import default_profile_photo from "./default-profile-image.png"
import Cookies from 'universal-cookie';
import { getFilteredEmployees } from '../../Fetch';

const cookies = new Cookies()

export const Header = () => {
  const navigate = useNavigate()

  const handleProfilePage = () => {
    const id = cookies.get('id')

    getFilteredEmployees(null, id).then(res => {
      navigate("/employeeProfile", { state: res[0] })
    })
  }

  const handleBack = () => navigate("/")

  return (
    <>
      <div className="flex h-24 bg-[#f50101]">
        <div
          className="flex-none w-1/12 border-solid border border-black text-2xl grid place-items-center"
          onClick={handleBack}
        >
          Logout
        </div>
        <div className="shrink w-10/12 border-solid border border-black border-l-0 border-r-0 text-2xl grid place-items-center">
          Searchable Enterprise Directory
        </div>

        <div
          className="flex-none w-1/12 border-solid border border-black grid place-items-center"
          onClick={handleProfilePage}
        >
          <img className="object-fill w-10/12 h-10/12" src={default_profile_photo} alt="Profile" />
        </div>
      </div>
    </>
  )
}

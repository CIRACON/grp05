import React from 'react'
import { useNavigate } from "react-router-dom";
import default_profile_photo from "./default-profile-image.png";
import profile_svg from "./account.svg";
import Travelers_logo from "./Travelers-logo.png";
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
      {/* <div className="flex h-24 bg-[#f50101]">
        <div
          className="flex-none w-1/12 border-solid border border-black text-2xl grid place-items-center"
          onClick={handleBack}
        >
          Back
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
      </div> */}
      <div className="flex h-24 bg-[#8D99AE]">

        <div className="group font-sans text-[50px] text-white italic hover:text-[#c40101] grid place-items-center antialiased ml-6 " onClick={handleBack}> TRAVELERS </div>

        <img className='group-hover:stroke-[#c40101]' src={Travelers_logo}></img>

        <div className="shrink w-6/12 text-2xl grid place-items-center text-white font-bold text-[25px]">
          Searchable Enterprise Directory
        </div>
        <div
          className="flex-none w-1/12 inset-y-0 right-0 grid place-items-center ml-[150px]"
          onClick={handleProfilePage}
        >
          <img className="object-fill w-10/12 h-10/12 stroke-blue-400" src={profile_svg} alt="Profile" />
        </div>
      </div>
    </>
  )
}

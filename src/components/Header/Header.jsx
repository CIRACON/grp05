import React from 'react'
import { useNavigate } from "react-router-dom";
import Travelers_logo from "./Travelers-logo.png";
import Cookies from 'universal-cookie';
import { getFilteredEmployees } from '../../Fetch';
import { UserCircleIcon } from '@heroicons/react/24/solid'

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
      <div className="flex h-24 bg-[#8D99AE] sticky top-0">

        <div className="group font-sans text-[40px] text-white italic hover:text-[#c40101] grid place-items-center antialiased ml-6 " onClick={handleBack}> TRAVELERS </div>

        <img className='group-hover:stroke-[#c40101]' src={Travelers_logo} alt="Logo"></img>

        <div className="shrink w-6/12 text-2xl grid place-items-center text-white font-bold text-[25px]">
          Searchable Enterprise Directory
        </div>
        <div
          className="flex-none w-1/12 inset-y-0 right-0 grid place-items-center ml-[200px]"
          onClick={handleProfilePage}
        >
          <UserCircleIcon className="object-fill w-8/12 h-8/12 text-white hover:text-[#c40101]" alt="Profile" />
        </div>
      </div>
    </>
  )
}



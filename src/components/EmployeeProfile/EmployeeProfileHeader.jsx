import React from 'react'
import { useNavigate } from "react-router-dom";
import Travelers_logo from "../Header/Travelers-logo.png"

export const EmployeeProfileHeader = () => {
    const navigate = useNavigate()
    const handleBack = (employee) => navigate('/home') //Set-up to retain search results/criteria

    return (
        <>
            <div className="flex h-24 bg-[#8D99AE] text-2xl">
                <div
                    className="flex-none w-24 h-24 grid place-items-center"
                    onClick={handleBack}
                >
                    
                    <img className='group-hover:stroke-[#c40101] ml-[15px]' src={Travelers_logo} alt="Logo"></img>
              </div>
                <div className="shrink w-6/12 text-2xl grid place-items-center text-white font-bold text-[25px] ml-[225px]">
                    Employee Profile
                </div>
            </div>
        </>
    )
}
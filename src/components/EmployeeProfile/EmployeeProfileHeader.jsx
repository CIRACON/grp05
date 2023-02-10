import React from 'react'
import { useNavigate } from "react-router-dom";

export const EmployeeProfileHeader = () => {
    const navigate = useNavigate()
    const handleBack = (employee) => navigate('/home') //Set-up to retain search results/criteria

    return (
        <>
            <div className="flex h-24 bg-[#f50101] text-2xl">
                <div
                    className="flex-none w-1/12 border-solid border border-black grid place-items-center"
                    onClick={handleBack}
                >
                    Back
                </div>
                <div className="shrink w-11/12 border-solid border border-black border-l-0 grid place-items-center">
                    EmployeeProfile
                </div>
            </div>
        </>
    )
}
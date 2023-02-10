import React from 'react'
import default_profile_photo from "./default-profile-image.png"

export const EmployeeProfileBody = ({ employee }) => {

    const addEmployeeField = (fieldName, value) => {
        return (
            <div className="p-4">
                <text className="font-medium">
                    {`${fieldName}:\t`} <span className="font-normal">{value}</span>
                </text>
            </div>
        )
    }

    const salaryCheck = () => {
        if (Object.keys(employee).includes('salary'))
            return addEmployeeField("Salary", employee.salary)
    }

    return (
        <>
            <div className="h-[35rem] bg-gray-100 p-5 text-lg flex">
                <div className="w-3/5">
                    {addEmployeeField("Name", employee.name)}
                    {addEmployeeField("Employee Id", employee.id)}
                    {addEmployeeField("Phone Number", employee.phone_number)}
                    {salaryCheck()}
                    {addEmployeeField("Job Role", employee.job_role)}
                    {addEmployeeField("Work Location", employee.work_location)}
                    {addEmployeeField("Division", employee.division)}
                    {addEmployeeField("Department", employee.department)}
                </div>
                <div className="w-2/5 grid place-items-center">
                    <img className="object-fill w-10/12 h-10/12" src={default_profile_photo} alt="Profile" />
                </div>
            </div>
        </>
    )
}
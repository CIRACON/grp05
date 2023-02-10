import React from 'react'
import { useLocation } from 'react-router-dom';
import { EmployeeProfileHeader } from './EmployeeProfileHeader';
import { EmployeeProfileBody } from './EmployeeProfileBody';

export const EmployeeProfile = () => {
    const { state } = useLocation()

    return (
        <>
            <EmployeeProfileHeader />
            <EmployeeProfileBody employee={state} />
        </>
    )
}

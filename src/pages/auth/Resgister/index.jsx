import React from 'react'
import { Navigate } from 'react-router-dom'
import InputValid from "../../../components/InputValid"
export default function Resgister({ submitRegis, regis }) {
    if (regis) {
        return <Navigate to="/Login" />
    }
    return (
        <div>
            <InputValid regis={regis} submitRegis={submitRegis} />
        </div>
    )
}

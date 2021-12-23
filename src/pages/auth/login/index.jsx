import React from "react"
import { Navigate } from "react-router-dom"
import Button from "../../../components/Button"
export default function Login({ login, submitLogin }) {
    if (login) {
        return <Navigate to="/profile" />
    }

    return (
        <div>
            <Button onClick={submitLogin}>login</Button>
        </div>

    )
}

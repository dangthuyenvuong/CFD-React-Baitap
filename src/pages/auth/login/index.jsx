import React from "react"
import { Navigate } from "react-router-dom"
import Button from "../../../components/Button"
import InputLogin from "../../../components/InputLogin"
export default function Login({ login, submitLogin }) {
    if (login) {
        return <Navigate to="/profile" />
    }

    return (
        <div>
            <InputLogin submitLogin={submitLogin} />
            {/* <Button onClick={submitLogin}>login</Button> */}

        </div>

    )
}

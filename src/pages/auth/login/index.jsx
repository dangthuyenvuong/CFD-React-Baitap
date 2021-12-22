import React from "react"
import Button from "../../../components/Button"
export default function Login({ submitLogin }) {

    return (
        <div>
            <Button onClick={submitLogin} >Login</Button>
        </div>

    )
}

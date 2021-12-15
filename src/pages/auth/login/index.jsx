import React from 'react'
import Button from '../../../components/Button'

export const Login = ({ submitLogin }) => {
    return (
        <div>
            <Button onClick={submitLogin}>Login</Button>
        </div>
    )
}

export default Login
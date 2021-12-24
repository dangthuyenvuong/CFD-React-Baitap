import React, { useContext } from 'react'
import { AuthContext } from 'context/AuthContext'
import { useAuth } from 'context/AuthContext'

export const Info = () => {
    const { user } = useAuth()
    return (
        <div>
            name: {user.name} <br/>
            email: {user.email}
        </div>
    )
}

export default Info

import React from 'react';
import {Navigate} from 'react-router-dom'

function Register({login}) {
    if (login) return <Navigate to='/profile' />

    return (
        <div>
            Resgister
        </div>
    );
}

export default Register;
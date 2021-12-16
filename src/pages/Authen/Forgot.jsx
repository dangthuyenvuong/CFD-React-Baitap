import React from 'react';
import {Navigate} from 'react-router-dom'

function Forgot({login}) {
    if (login) return <Navigate to='/profile' />

    return (
        <div>
            Forgot Password
        </div>
    );
}

export default Forgot;
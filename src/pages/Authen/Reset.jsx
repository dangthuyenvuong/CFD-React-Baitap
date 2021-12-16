import React from 'react';
import {Navigate} from 'react-router-dom'
function Reset({ login }) {
    

    if (login) return <Navigate to='/profile' />
    
    return (
        <div>
            Reset Pasword
        </div>
    );
}

export default Reset;
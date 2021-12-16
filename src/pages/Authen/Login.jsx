import React from 'react';

function Login({handleLogin}) {
    return (
        <div>
            <button  onClick={handleLogin} >LOGIN</button>
        </div>
    );
}

export default Login;
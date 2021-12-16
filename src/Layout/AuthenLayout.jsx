import React from 'react';
import {Link , Outlet} from 'react-router-dom'
function AuthenLayout(props) {
    return (
        <div>
            Authen Page
            <ul>
                <li>
                    <Link to = 'login'>Login</Link>
                </li>
                <li>
                    <Link to = 'register'>Register</Link>
                </li>
                <li>
                    <Link to = 'reset'>Reset Password</Link>
                </li>
                <li>
                    <Link to = 'forgot'>Forgot Password</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
}

export default AuthenLayout;
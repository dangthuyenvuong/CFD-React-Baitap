import { Outlet } from 'react-router';
import { Link, Navigate } from 'react-router-dom';

function ProfileLayOut({ login , handleLogout}) {
    
    // const navigate = useNavigate();
    // useEffect(() => {
    // if (!login) {
    //     navigate('/')
    // }
    // },[login])

    if ( !login) return <Navigate to = '/'/>
    return (
        <div>
            <ul>
                <li>
                    <Link to = '' >My Profile</Link>
                </li>
                <li>
                    <Link to = 'order' >Order</Link>
                </li>

                <li>
                    <Link to = 'payment' >Pay Ment</Link>
                </li>
                <li>
                    <Link to = 'address' >Address</Link>
                </li>
            </ul>
            ProfileLayOut 
            <button onClick={handleLogout}>Logout</button>
            <Outlet />
        </div>
    );
}

export default ProfileLayOut;
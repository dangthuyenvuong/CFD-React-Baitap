import Button from 'components/Button'
import { useSelector, useDispatch } from 'react-redux'
import styles from './style.module.css'

const Header = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(store => store.auth)
    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        })
    }
    return (
        <div className={`${styles.header} header`}>
            Xin chao {user?.name}
            <Button onClick={logout}>Logout</Button>
        </div>
    )
}

export default Header
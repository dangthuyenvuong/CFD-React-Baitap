import Button from 'components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Header = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(store => store.auth)
    const { cart } = useSelector(store => store.cart)
    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        })
    }
    return (
        <div className={`${styles.header} header`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Header
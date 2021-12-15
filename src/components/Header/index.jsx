import styles from './style.module.css'

const Header = ({ user }) => {
    return <div className={`${styles.header} header`}>Xin chao {user.name}</div>
}

export default Header
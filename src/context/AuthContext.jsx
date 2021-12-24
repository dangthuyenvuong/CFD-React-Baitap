import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

let userTemp
try{
    userTemp = JSON.parse(localStorage.getItem('user'))
}catch(err){
    userTemp = null
}

export const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(!!userTemp)
    const [user, setUser] = useState(userTemp)

    const submitLogin = () => {
        const user = {
            name: 'Dang Thuyen Vuong',
            email: 'dangthuyenvuong@gmail.com',
            avatar: '....'
        }
        setLogin(true)
        setUser(user)

        localStorage.setItem('user', JSON.stringify(user))
    }

    const submitLogout = () => {
        setLogin(false)
        setUser(undefined)
        localStorage.removeItem('user')
    }

    return (
        <AuthContext.Provider value={{ login, user, submitLogin, submitLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
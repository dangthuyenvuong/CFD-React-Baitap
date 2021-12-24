const { createContext, useContext, useState } = require("react");

const PageContext = createContext()

export const PageProvider = ({ children }) => {
    const [isOpenCart, setIsOpenCart] = useState(false)

    const openCart = () => setIsOpenCart(true)

    const closeCart = () => setIsOpenCart(false)

    return (
        <PageContext.Provider value={{ openCart, closeCart, isOpenCart }}>{children}</PageContext.Provider>
    )
}

export const usePage = () => useContext(PageContext)
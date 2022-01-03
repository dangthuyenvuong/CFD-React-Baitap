import CartModal from 'components/CartModal'
import { usePage } from 'context/PageContext'
import Button from 'components/Button'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'components/Header'

export const MainLayout = () => {
    const { isOpenCart, openCart, closeCart } = usePage()

    return (
        <div>
            {/* <div>Header</div> */}
            <Header />
            <main id="main-content">
                <Outlet />
            </main>
            {/* <div>Footer</div>
            <Button onClick={openCart}>open cart</Button>
            <Button onClick={closeCart}>close cart</Button>
            <CartModal isOpen={isOpenCart}/> */}
        </div>
    )
}

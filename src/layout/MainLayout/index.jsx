import CartModal from 'components/CartModal'
import { usePage } from 'context/PageContext'
import Button from 'components/Button'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    const { isOpenCart, openCart, closeCart } = usePage()

    return (
        <div>
            <div>Header</div>
            <main id="main-content">
                <Outlet />
            </main>
            <div>Footer</div>
            <Button onClick={openCart}>open cart</Button>
            <Button onClick={closeCart}>close cart</Button>
            <CartModal isOpen={isOpenCart}/>
        </div>
    )
}

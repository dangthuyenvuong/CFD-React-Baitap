import { Drawer } from '@mui/material'
import Button from 'components/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export const ModalCart = () => {
    const dispatch = useDispatch()
    const { isOpenCart } = useSelector(store => store.page)
    const { cart } = useSelector(store => store.cart)
    return (
        <Drawer
            open={isOpenCart}
            onClose={() => dispatch({ type: 'CLOSE_CART' })}
            className="ModalCart"
        >
            Quantity: {cart.totalQuantity} <br />
            {
                cart.listItems?.map(e => (
                    <div>
                        Product name: {e.product.name} <br />
                        <Button onClick={() => dispatch({ type: 'DECREMENT', payload: {productId: e.product._id, quantity: e.quantity - 1} })}>-</Button>
                        <input type="text" value={e.quantity} />
                        <Button onClick={() => dispatch({ type: 'INCREMENT', payload: {productId: e.product._id, quantity: e.quantity + 1} })}>+</Button>
                    </div>
                ))
            }
        </Drawer>
    )
}


export default ModalCart
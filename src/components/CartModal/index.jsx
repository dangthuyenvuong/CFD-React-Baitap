import Modal from 'components/Modal'
import React from 'react'

export const CartModal = ({isOpen}) => {
    console.log(isOpen)
    return (
        <Modal isOpen={isOpen}>
            <div>
                    Cart
            </div>
        </Modal>
    )
}


export default CartModal
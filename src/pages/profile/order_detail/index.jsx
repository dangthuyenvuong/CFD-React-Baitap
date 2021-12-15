import React from 'react'
import { useParams } from 'react-router'

export const OrderDetail = () => {

    const { id } = useParams()
    return (
        <div>
            OrderDetail {id}
        </div>
    )
}

export default OrderDetail
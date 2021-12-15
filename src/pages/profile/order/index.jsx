import React from 'react'
import { Link } from 'react-router-dom'

export const Order = () => {

    const list = [
        {
            id: 1,
            title: 'Order 1'
        },
        {
            id: 2,
            title: 'Order 2'
        },
        {
            id: 3,
            title: 'Order 3'
        },
        {
            id: 4,
            title: 'Order 4'
        },
    ]

    return (
        <div>
            List order <br/>
            {
                list.map(e => <div key={e.id}><Link to={`${e.id}`}>{e.title}</Link></div>)
            }
        </div>
    )
}
export default Order
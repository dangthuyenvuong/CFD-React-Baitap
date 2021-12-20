import React from 'react'
import { Link } from 'react-router-dom';
export default function Order() {
    const arr = [
        {
            id: 1,
            name: 'order1'
        },
        {
            id: 2,
            name: 'order2'
        },
        {
            id: 3,
            name: 'order3'
        },
        {
            id: 4,
            name: 'order4'
        }
    ]
    return (
        <div>
            List order
            {arr.map(item => <div key={item.id}><Link to={`${item.id}`}>{item.name}</Link></div>)}
        </div>
    )
}

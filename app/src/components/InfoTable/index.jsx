import React from 'react'
import './style.scss';

export default function InfoTable({list = []}) {
    list = [
        {key: 'SKU', value:76645},
        {key: 'Freshness', value:'1 days old'},
        {key: 'Category', value:'Vegetables'},
        {key: 'Buy by', value:'pcs, kgs, box, pack'},
        {key: 'Stock', value:'In Stock'},
        {key: 'Delivery', value:'in 2 days'},
        {key: 'Farm', value:'Grocery Tarm Fields'},
        {key: 'Delivery area', value:'Czech republic'},
    ]
    return (
        <ul className='infoTable'>
            {list.map(item => 
                <li>
                    <span>{item.key}:</span>
                    <span>{item.value}</span>
                </li>
            )}
        </ul>
    )
}

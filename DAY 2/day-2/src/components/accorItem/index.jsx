import React, { useState } from 'react'
import { ArrowDown } from '../img'
import './style.scss'

export default function AccorItem() {
    const [isShow, setisShow] = useState(false)
    const show =() =>{
        setisShow(!isShow)
    }
    return (
        <div className={`accor ${isShow ? 'active' : ''}`}>
            <div className='accor__header' onClick={show}><h2>Item Name</h2><ArrowDown size='24'/></div>
            <div className="accor__item">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, unde iste adipisci, earum eligendi a odio praesentium velit expedita reprehenderit omnis fugiat atque quaerat quo provident deleniti quis magnam nobis!</div>
        </div>
    )
}

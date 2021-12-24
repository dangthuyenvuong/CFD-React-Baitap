import React from 'react'
import { Buttons } from '..'
import './style.scss';
export function ProductItem({url='imgs/8.jpg',name='product title', des='Space for a small product description',cost='1.5', sale='',}) {
    return (
        <div className='productItem'>
            <div className='productItem_img'>
                <img src={url} />
                {sale != '' && <div className='productItem_img-boxSale saleBox'><span>-38%</span></div>}
            </div>
            <div className='productItem_info'>
                <h2>{name}</h2>
                <span>{des}</span>
            </div>
            <div className='productItem_cost'>
                <div className='cost'>
                    <span>{cost} USD</span>
                    {sale != '' && <span className='sale'>{sale}</span>}
                </div>
                <Buttons size='small' bg='main' border='bold' radius color='bright'>Buy now</Buttons>
            </div>
        </div>
    )
}

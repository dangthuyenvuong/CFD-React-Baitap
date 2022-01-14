import React from 'react'
import './style.scss';

export default function BoxImgs({listImgs = []}) {

    listImgs = [
        {url: 'imgs/8.jpg'},
        {url: 'imgs/8.jpg'},
        {url: 'imgs/8.jpg'}
    ]

    return (
        <div className='boxImgs'>
            {listImgs.map(item => 
                <div className='boxImgs_item'>
                    <div className='img'><img src={item.url} /></div>
                    <div className='tags'>
                        <div className='saleBox'>-36%</div>  
                        <div className='saleBox'>Free shipping</div>  
                    </div>    
                </div>)}
        </div>
    )
}
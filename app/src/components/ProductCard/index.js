import React from 'react'
import { Heart, Compare , Close} from '../icons';
import './style.scss';

export function ProductCard({url= 'imgs/1.jpg'}) {
    return (
        <div className='productCard'>
            <div className='productCard_controls'>
                <div className='img'><img src={url} /></div>
                <ul className='productCard_controls-list'>
                    <li>
                        <Heart />
                        <span>Wishlist</span>
                    </li>
                    <li>
                        <Compare />
                        <span>Compare</span>
                    </li>
                    <li>
                        <Close />
                        <span>Remove</span>
                    </li>
                </ul>
            </div>
            <div className='productCard_info'>
                <div className='productCard_info-text'>
                    <div className='name'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { Heart, Compare , Close, Star} from '../icons';
import './style.scss';

export default function ProductCard({url= 'imgs/1.jpg' , title='Product title'}) {
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
                        <h3>{title}</h3>
                        <p><span>Farm:</span><span>Tharamis Farm</span></p>
                        <p><span>Freshness:</span><span>1 day old</span></p>
                    </div>
                </div>
                <div className='productCard_info-rate'>
                    <Star background='#FDBC15'/>
                    <Star background='#FDBC15'/>
                    <Star background='#FDBC15'/>
                    <Star background='#FDBC15'/>
                    <Star/>
                </div>
                <div className='productCard_info-cost'>
                    <span>36.99 USD</span>
                    <span>48.56 USD</span>
                </div>
            </div>
        </div>
    )
}

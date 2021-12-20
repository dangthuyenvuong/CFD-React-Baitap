import React from 'react'
import QuoteAvatar from './quoteAvatar'
import './style.scss'
 
export default function QuoteItem({name = "", avatarUrl = "", children}) {
    return (
        <div className='quote-item'>
            <div className="quote-item__wrap">
                <p className="quote-item__text">{children}</p>
                <p className="quote-item__name">{name}</p>
            </div>

            <QuoteAvatar type="medium">
                <img src={avatarUrl} alt="" srcset="" />
            </QuoteAvatar>
        </div>
    )
}
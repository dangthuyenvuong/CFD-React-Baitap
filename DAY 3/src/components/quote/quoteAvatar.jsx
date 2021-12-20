import React from 'react'
import './style.scss'

export default function QuoteAvatar({type = "small", children}) {
    return (
        <div className={`quote-item__avatar --${type}`}>
            {children}
        </div>
    )
}

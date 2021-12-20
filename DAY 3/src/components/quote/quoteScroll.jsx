import React from 'react'
import QuoteItem from './quoteItem'
import img from '../../assets/img/quote-avt.jpg'
import './style.scss'

export default function QuoteScroll() {
    return (
        <div className="quote-scroll">
            <div className="container-fluid">
                <div className="quote-scroll__wrap">
                    <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here</QuoteItem>
                    <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here</QuoteItem>
                    <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here</QuoteItem>
                    <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here</QuoteItem>
                </div>
            </div>
        </div>
    )
}

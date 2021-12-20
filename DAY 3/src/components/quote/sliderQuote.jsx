import React, { Component } from 'react'
import QuoteItem from './quoteItem'
import img from '../../assets/img/quote-avt.jpg'

import Slider from "react-slick";

export default class SliderQuote extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className='slider container'>
        <Slider {...settings}>
            <div style={{width: 369}}>
                <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here</QuoteItem>
            </div>
            <div style={{width: 369}}>
                <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here</QuoteItem>
            </div>
            <div style={{width: 369}}>
                <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here</QuoteItem>
            </div>
            <div style={{width: 369}}>
                <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here</QuoteItem>
            </div>
            <div style={{width: 369}}>
                <QuoteItem name="Name and Surname" avatarUrl={img}>This is an super space for your customers qoute. Dont worry it works smooth as pie. You will get all what you need by writiing a text here</QuoteItem>
            </div>
        </Slider>
      </div>
    );
  }
}


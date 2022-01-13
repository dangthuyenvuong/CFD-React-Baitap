import React from 'react';
import { Buttons, ProductItem } from '../';
import './style.scss';
export function ProductList({title = 'Section Headline'}) {
    return (
        <section className='productList'>
                <div className='container'>
                    <div className='title'>
                        <h2>{title}</h2>
                        <Buttons icon="right">Button</Buttons>
                    </div>
                    <div className='items'>
                        <div className='item'><ProductItem /></div>
                        <div className='item'><ProductItem /></div>
                        <div className='item'><ProductItem sale='4.8' /></div>
                        <div className='item'><ProductItem sale='4.8' /></div>
                    </div>
                </div>
        </section>
    )
}

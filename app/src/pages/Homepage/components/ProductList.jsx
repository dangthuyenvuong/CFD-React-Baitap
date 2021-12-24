import React from 'react';
import { ProductItem } from '../../../components';
import './style.scss';
export function ProductList() {
    return (
        <section className='productList'>
                <div className='container'>
                    <h2 className="title">Section Headline</h2>
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

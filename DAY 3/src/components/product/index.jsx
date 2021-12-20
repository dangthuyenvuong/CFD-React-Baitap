import React from 'react'
import './style.scss'
import Button from '../button'
import img from '../../assets/img/productDemo.jpg'
import classNames from 'classnames'

export default function Product({productTitle='Product Title', productDesc='Product desc', price='39.99', discount}) {
    return (
        <div className={classNames('product')}>
            <div className="product__top">
                <img src={img} className='product__top-img' alt="" />
                {/* <div className="product__top-img"></div> */}
                <div className="product__top-discount">
                <h6>{discount}</h6>
                </div>
            </div>
            <div className="product__bottom">
                <div className="product__bottom-info">
                    <h5>{productTitle}</h5>
                    <p>{productDesc}</p>
                </div>
                <div className="product__bottom-price">
                    <h4>{price} USD</h4>
                    <Button color='colored'>Buy now</Button>
                </div>
            </div>
        </div>
    )
}

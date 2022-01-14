import React from 'react'
import { Close } from '../icons';
import {ProductCard} from '../'
import classNames from 'classnames';
import Buttons from '../Buttons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CLOSE_CARD } from '../../constant';

import './style.scss';

export default function NavSide() {
    const {isOpen} = useSelector(store => store.page)
    const dispatch = useDispatch();
    return (
        <div className={classNames('navSide',`${isOpen?'active':''}`)}>
            <div className='navSide_title'>
                <h2>Shopping card</h2>
                <div onClick={() => dispatch({type: CLOSE_CARD})}>
                    <span>Close</span>
                    <Close />
                </div>
            </div>
            <div className='navSide_list'>
                <ProductCard />
                <ProductCard />
            </div>
            <div className='navSide_total'>
                <p>subtotal</p>
                <p className='cost'>73.98 USD</p>
                <div className='navSide_total-btns'>
                    <Buttons bg='none'>Continue shopping</Buttons>
                    <Buttons bg='main' color='bright' border='bold' radius>Go to Checkout</Buttons>
                </div>
            </div>
        </div>
    )
}
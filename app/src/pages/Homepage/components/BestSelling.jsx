import React from 'react'
import { SideMenu , ProductItem } from '../../../components';
import './style.scss';
export function BestSelling({title = 'Best selling products' , list=[]}) {
    return (
        <section className='bestSelling'>
            <div className='container'>
                <div className='bestSelling_box box_side'>
                    <SideMenu list={list} contentBtn='More products' title={title}/>
                </div>
                <div className='bestSelling_box'>
                    <div className='item'><ProductItem /></div>
                    <div className='item'><ProductItem sale='4.8' /></div>
                    <div className='item'><ProductItem sale='4.8' /></div>
                </div>
            </div>
        </section>
    )
}

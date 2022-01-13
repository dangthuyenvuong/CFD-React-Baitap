import React from 'react'
import { SideMenu , ProductItem } from '../../../components';
import './style.scss';
import { useSelector } from 'react-redux';

export function BestSelling({title = 'Best selling products' , list=[] , productList=[]}) {

    return (
        <section className='bestSelling'>
            <div className='container'>
                <div className='bestSelling_box box_side'>
                    <SideMenu list={list} contentBtn='More products' title={title}/>
                </div>
                <div className='bestSelling_box'>
                    {/* {productList.map(item => <ProductItem url={item.images[0].base_url}/>)} */}
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import { SideMenu, SubBanner } from '../../../components';
import './style.scss';
export function CategoryMenu() {
    const links = [
        {
            content: 'Bakery',
            link: ''
        },
        {
            content: 'Fruit and vegetables',
            link: ''
        },
        {
            content: 'Meat and fish',
            link: ''
        },
        {
            content: 'Drinks',
            link: ''
        },
        {
            content: 'Kitchen',
            link: ''
        }
    ]
    return (
        <section className="categoryMenu">
            <div className="container">
                <div className='categoryMenu_box box_side'>
                    <SideMenu  title = "Category menu" list={links}/>
                </div>
                <div className='categoryMenu_box'>
                    <div className='item'><SubBanner /></div>
                    <div className='item'><SubBanner /></div>
                </div>
            </div>
        </section>
    )
}

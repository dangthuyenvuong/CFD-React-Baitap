import React from 'react';
import {SideMenu , Tag} from '../';
import './style.scss';

export default function Footer() {
    const list1 = [
        {
            content: 'About Us',
            link: ''
        },
        {
            content: 'Careers',
            link: ''
        },
        {
            content: 'Press Releases',
            link: ''
        },
        {
            content: 'Blog',
            link: ''
        }
    ]
    const list2 = [
        {
            content: 'Facebook',
            link: ''
        },
        {
            content: 'Twitter',
            link: ''
        },
        {
            content: 'Instagram',
            link: ''
        },
        {
            content: 'Youtube',
            link: ''
        },
        {
            content: 'Likedin',
            link: ''
        }
    ]
    const list3 = [
        {
            content: 'Become an Affiliate',
            link: ''
        },
        {
            content: 'Advertise your product',
            link: ''
        },
        {
            content: 'Sell on Market',
            link: ''
        }
    ]
    const list4 = [
        {
            content: 'Your account',
            link: ''
        },
        {
            content: 'Returns Centre',
            link: ''
        },
        {
            content: '100% purchase',
            link: ''
        },
        {
            content: 'Chat with us',
            link: ''
        },
        {
            content: 'Help',
            link: ''
        }
    ]
    return (
        <footer>
            <div className='container'>
                <section className='listMenu'>
                    <div className='listMenu_item'>
                        <SideMenu title='Get in touch' list={list1} btn={false}/>
                    </div>
                    <div className='listMenu_item'>
                        <SideMenu title='Connections' list={list2} btn={false}/>
                    </div>
                    <div className='listMenu_item'>
                        <SideMenu title='Earnings' list={list3} btn={false}/>
                    </div>
                    <div className='listMenu_item'>
                        <SideMenu title='Account' list={list4} btn={false}/>
                    </div>
                </section>
                <section className='productTags'>
                    <h2 className='productTags_title'>
                        Product tags
                    </h2>
                    <div className='productTags_list'>
                        <div className='item'><Tag>Beans</Tag> </div>
                        <div className='item'><Tag>Carrots</Tag></div>
                        <div className='item'><Tag>Apples</Tag></div>
                        <div className='item'><Tag>Garlic</Tag> </div>
                        <div className='item'><Tag>Mushrooms</Tag></div>
                        <div className='item'><Tag>Tomatoes</Tag></div>
                        <div className='item'><Tag>Chilli peppers</Tag> </div>
                        <div className='item'><Tag>Broccoli</Tag></div>
                        <div className='item'><Tag>Watermelons</Tag></div>
                        <div className='item'><Tag>Oranges</Tag> </div>
                        <div className='item'><Tag>Bananas</Tag></div>
                        <div className='item'><Tag>Grapes</Tag></div>
                        <div className='item'><Tag>Cherries</Tag></div>
                        <div className='item'><Tag>Seo tag</Tag> </div>
                        <div className='item'><Tag>Fish</Tag></div>
                        <div className='item'><Tag>Seo tag</Tag></div>
                        <div className='item'><Tag>Fresh food</Tag> </div>
                        <div className='item'><Tag>Lemons</Tag></div>
                    </div>
                    <p>Copyright © 2020 petrbilek.com</p>
                </section>
            </div>
        </footer>
    )
}

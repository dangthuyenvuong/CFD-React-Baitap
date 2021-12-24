import React from 'react'
import { Buttons, Quote } from '../../../components';
import { Arrow } from '../../../components/icons';
import Flickity from 'react-flickity-component';
import './style.scss';
// import "styles.css";
// import "flickity.css";
export function CustomerQuotes() {
    var option = {
        initialIndex: 2,
        contain: true,
        wrapAround: true,
        pageDots: false,
        autoPlay: true
    }
    return (
        <section className='customerQuotes'>
            <div className='customerQuotes_info'>
                <h2>Our customers says</h2>
                <div><Buttons icon='right'>Buttons</Buttons></div>
            </div>
            <div className='customerQuotes_list'>
                <Flickity
                    className={'customerQuotes_list'} // default ''
                    elementType={'div'} // default 'div'
                    options={option} // takes flickity options {}
                >
                <div className='item'>
                    <Quote>“ This is an super space for your customers qoute. 
                        Don't worry it works smooth as pie. You will get all what 
                        you need by writiing a text here “
                    </Quote>
                </div>
                <div className='item'>
                    <Quote>“ This is an super space for your customers qoute. 
                        Don't worry it works smooth as pie. You will get all what 
                        you need by writiing a text here “
                    </Quote>
                </div>
                <div className='item'>
                    <Quote>“ This is an super space for your customers qoute. 
                        Don't worry it works smooth as pie. You will get all what 
                        you need by writiing a text here “
                    </Quote>
                </div>
                <div className='item'>
                    <Quote>“ This is an super space for your customers qoute. 
                        Don't worry it works smooth as pie. You will get all what 
                        you need by writiing a text here “
                    </Quote>
                </div>
                <div className='item'>
                    <Quote>“ This is an super space for your customers qoute. 
                        Don't worry it works smooth as pie. You will get all what 
                        you need by writiing a text here “
                    </Quote>
                </div>
                <div className='item'>
                    <Quote>“ This is an super space for your customers qoute. 
                        Don't worry it works smooth as pie. You will get all what 
                        you need by writiing a text here “
                    </Quote>
                </div>
                </Flickity>
            </div>
        </section>
    )
}

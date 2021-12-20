import React from 'react'
import './bannerSection.scss'
import Category from '../../components/category'
import Banner from '../../components/banner'

export default function BannerSection() {
    return (
        <section className='bannerSection'>
            <div className="container">
            <Category header='Category Header' button='More categories'/>
            <Banner color='stroke'/>
            <Banner color='stroke'/>
            </div>
        </section>
    )
}

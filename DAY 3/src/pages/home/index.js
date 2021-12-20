import React from 'react'
import Blog from '../../components/blog'
import Quote from '../../components/quote'
import SliderQuote from '../../components/quote/sliderQuote'
import BannerSection from './bannerSection'
import Productwcate from './productwcate'
import './style.scss'

export default function Home() {
    return (
        <>
            <BannerSection/>
            <Productwcate header='Best selling products'/>
            <Productwcate header='Best from Farmers'/>
            <Quote />
            <Blog />
        </>
    )
}

import { Skeleton } from 'components/Skeleton'
import React from 'react'
import './style.scss'
export const ProductCard = ({ name, thumbnail_url, real_price, loading }) => {

    if (loading) return (
        <div className='ProductCard'>
            <Skeleton width={'100%'} height={200} />
            <div className="name">
                <Skeleton height={38} />
            </div>
            <div className="price">
                <Skeleton height={24} width={'50%'} />
            </div>
        </div>
    )

    return (
        <div className='ProductCard'>
            <div className="cover">
                <img src={thumbnail_url} alt="" />
            </div>
            <div className="name">
                {name}
            </div>
            <div className="price">
                {real_price}
            </div>
        </div>
    )
}

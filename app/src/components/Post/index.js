import React from 'react'
import './style.scss'
export default function Post({children ,url = 'imgs/8.jpg', topic='', avt='', author='Athor' , date='14.04.2021' , size='middle'}) {
    return (
        <div className={`post post-${size}`}>
            <div className="post_img" style={{backgroundImage: `url(${url})`}}>
            </div>
            {topic != '' && <div className='saleBox'><span>{topic}</span></div>}

            <div className={`post_title`}>
                <h2>{children}</h2>
                <div className={`post_title-detail`}>
                    {avt != '' && <div className={`post-${size}-avt`}></div>}
                    <span>{author}</span>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    )
}

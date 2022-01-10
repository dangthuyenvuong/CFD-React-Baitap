import React from 'react'
import './style.scss';
export default function Quote({children , name = 'Name and Surname' , url='imgs/av4.png'}) {
    return (
        <div className='quote'>
            <div className='quote_user'>
                <p className='comment'>{children}</p>
                <p className='name'>{name}</p>
            </div>
            <div className='quote_avt' style={{backgroundImage: `url(${url})`}}>
                
            </div>
        </div>
    )
}

import React from 'react'
import './style.scss';
export function InputMethod({name = 'Name', inputname = '', fee , url}) {
    return (
        <div className='inputMethod inputStyle'>
            <div className='inputMethod_name'>
                <input type="radio" name={inputname} />
                <span className='textStyle'>{name}</span>
            </div>
            {fee && <div className='inputMethod_fee'>
                <span className='textStyle'>+{fee} USD</span>
                <span className='textStyle'>Additional price</span>
            </div>}
            <div className='inputMethod_logo'>
                <img src={url}/>
            </div>
        </div>
    )
}

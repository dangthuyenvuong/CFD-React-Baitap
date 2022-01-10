import React from 'react'
import './style.scss';
export default function InputMethod({value = 'Name', name = '', fee , url ,onChange}) {
    return (
        <label htmlFor={value} className='inputMethod inputStyle'>
            <div className='inputMethod_name'>
                <input type="radio" name={name} id={value} value={value} onChange={onChange}/>
                <span className='textStyle'>{value}</span>
            </div>
            {fee && <div className='inputMethod_fee'>
                <span className='textStyle'>+{fee} USD</span>
                <span className='textStyle'>Additional price</span>
            </div>}
            <div className='inputMethod_logo'><img src={url}/></div>
        </label>
    )
}

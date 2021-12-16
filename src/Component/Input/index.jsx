import React from 'react';
import { ArrowDown, ArrowUp, Letter } from '../../icon/Icon';
import './style.scss'
import classNames from 'classnames'

const Input = ({name = "Text Label ", type = 'icon-left',placeHolder = "Text field", checkbox = false,  letter = false , range = false}) => {
    return (
        <div className={classNames('input','input-center', {letter} , {range}, {checkbox})}>
            <p className="input-name">
                {name}
            </p>
            <div className="input-main" >
                {checkbox && type === 'icon-left' && <input className='input-checkbox' type='checkbox' ></input>}
                {letter && type === 'icon-left' && <span>{<Letter width={20} height={20}/>}</span>}
                
                <input className='input-text' type="text" placeholder={placeHolder} />

                {checkbox && type === 'icon-right' && <input className='input-checkbox' type='checkbox' ></input>}
                {letter &&  type === 'icon-right' && <span>{<Letter width={20} height={20}/>}</span>}
                {range && <div className='input-change'><a href="#!">{<ArrowUp/>}</a><a href="#!">{<ArrowDown/>}</a></div>}
            </div>
        </div>
    );
};

export default Input;
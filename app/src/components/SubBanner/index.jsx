import React from 'react';
import { Buttons } from '..';
import './style.scss'
export function SubBanner({urlImg = "./imgs/Banner.png"}) {
    return (
        <div className="SubBanner">
            <div className="SubBanner_text">
                <span>Banner subfocus</span>
                <h3>Space for heading</h3>
                <Buttons bg="none" border="bright" radius>Read Recepies</Buttons>
            </div>
            <img className="SubBanner_img" src={urlImg} alt="" />
        </div>
    )
}

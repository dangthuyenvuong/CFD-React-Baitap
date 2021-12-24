import React from 'react'
import './style.scss'
export function InformationBar() {
    return (
        <div className="informationBar">
            <div className="informationBar_list">
                <span className="textLink"><a href="">Chat with us</a></span>
                <span>+420 336 775 664</span>
                <span>info@freshnesecom.com</span>
            </div>
            <div className="informationBar_list">
                <span className="textLink"><a href="">blog</a></span>
                <span className="textLink"><a href="">about us</a></span>
                <span className="textLink"><a href="">careers</a></span>
            </div>
        </div>
    )
}

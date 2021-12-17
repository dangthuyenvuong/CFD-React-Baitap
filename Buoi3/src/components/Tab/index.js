import React from 'react'
import './style.scss'
import { useState } from 'react'
export default function Tab() {
    let [tab,setTab] = useState(1);

    function changeTab(index) {
        setTab(index);
    }

    return (
        <section className='Tab'>
            <ul className='Tab_menu'>
                <li className={tab == 1?"active":""} onClick = {() => changeTab(1)}>Tab 1</li>
                <li className={tab == 2?"active":""} onClick = {() => changeTab(2)}>Tab 2</li>
            </ul>
            <div className='Tab_list'>
                <ul className={tab == 1?"active":""}>
                    <li>Select 1</li>
                    <li>Select 2</li>
                    <li>Select 3</li>
                    <li>Select 4</li>
                </ul>
                <ul className={tab == 2?"active":""}>
                    <li>Select 5</li>
                    <li>Select 6</li>
                    <li>Select 7</li>
                    <li>Select 8</li>
                </ul>
            </div>
        </section>
    )
}

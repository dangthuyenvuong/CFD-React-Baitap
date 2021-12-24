import React from 'react'
import {InformationBar,SearchBar,MiniCard } from '..';
import { Buy , User } from '../icons';
import './style.scss'

export function Header() {
    return (
        <header>
            <div className="container">
                <InformationBar />
                <div class="header">
                    <div className="header_logo">
                        <img src="imgs/logo.png" alt="" />
                    </div>
                    <SearchBar />
                    <div className="header_icons">
                        <MiniCard><User /></MiniCard>
                        <MiniCard infoBox><Buy /></MiniCard>
                    </div>
                </div>
            </div>
        </header>
    )
}

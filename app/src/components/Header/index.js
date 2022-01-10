import React from 'react'
import { useDispatch } from 'react-redux';
import { InformationBar,SearchBar,MiniCard } from '..';
import { OPEN_CARD } from '../../constant';
import { Buy , User } from '../icons';
import './style.scss'

export default function Header() {
    const dispatch = useDispatch()

    function handleCard() {
        dispatch({
            type:OPEN_CARD
        });
    }

    
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
                        <MiniCard onClick={handleCard} infoBox><Buy /></MiniCard>
                    </div>
                </div>
            </div>
        </header>
    )
}

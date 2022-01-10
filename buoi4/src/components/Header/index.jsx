import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Breadcrumb, BreadcrumbsItem } from '../Breadcrumb';
import Buttons from '../Buttons';
import './style.scss';

export default function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch() 
    function handleClick() {
        navigate('/auth')
    }
    return (
        <>
            <header>
                <span>Xin chào</span>
                <Buttons handleClick={handleClick}>Login</Buttons>            
                <Buttons handleClick={() => {
                    dispatch({type:'OPEN_CARD'})
                }}>Open</Buttons>            
            </header>
            <Breadcrumb>
                <BreadcrumbsItem to='/'>Home</BreadcrumbsItem>
                <BreadcrumbsItem to='/about'>About</BreadcrumbsItem>
                <BreadcrumbsItem to='/profile'>Profile</BreadcrumbsItem>
                <BreadcrumbsItem to='/contact'>Contact</BreadcrumbsItem>
            </Breadcrumb>
        </>
    )
}

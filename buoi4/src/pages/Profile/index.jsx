import React , {useState , useEffect}from 'react'
import store from '../../store'
import Buttons from '../../components/Buttons'
import { useSelector, useDispatch } from 'react-redux';

export function Profile() {
    const store = useSelector(state => state.auth)
    
    return (
        <>
            Email: {store.email}
        </>
    )
}

import React from 'react'
import {useDispatch} from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import Buttons from '../../components/Buttons';
import { LOGIN_ACTION , TOKEN} from '../../constant';
import {useForm} from '../../hooks/useForm'


export function Login() {
    const navigate = useNavigate();
    let {form , error, register , validate} = useForm({
        username: '',
        password: ''
    });
    const dispatch = useDispatch();
    if(window.localStorage.getItem(TOKEN)) return <Navigate to='/profile' />
    
    const checkLogin = async (e) => {
        e.preventDefault();
        let errorOb = validate();
        if(Object.keys(errorOb).length == 0){
            dispatch({
                type: LOGIN_ACTION,
                payload: form
            })
            navigate('/profile')
        }
    }
    return (
        <div>
            <form action="">
                <label>Email</label> <br />
                <input type="text" {...register('username')}/> <br />
                <p>{error.username}</p>
                <label>Password</label> <br />
                <input type="password" {...register('password')}/> <br />
                <p>{error.password}</p>
            </form>
            <Buttons handleClick={checkLogin}>Log in</Buttons>
        </div>
    )
}

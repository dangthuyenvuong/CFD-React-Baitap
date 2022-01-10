import React, { useState } from 'react';
import Buttons from '../../components/Buttons';
import { useForm } from '../../hooks/useForm';
import '../style.scss';


export function Register() {

    let {form , error , handleSubmit , register} = useForm({
        email:'',
        username:'',
        password:'',
        confirm:'',
        select:'',
        age: '',
        check: ''
    });

    return (
        <div>
            <form className='form'>
                <div className='form_group'>
                    <label>Email</label>
                    <input type="type" {...register('email')} />
                    <p>{error.email}</p>
                </div>
                <div className='form_group'>
                    <label>User name</label>
                    <input type="text" {...register('username')}/>
                    <p>{error.username}</p>
                </div>
                <div className='form_group'>
                    <label>Password</label>
                    <input type="password" {...register('password')}/>
                    <p>{error.password}</p>
                </div>
                <div className='form_group'>
                    <label>Confirm password</label>
                    <input type="password" {...register('confirm')}/>
                    <p>{error.confirm}</p>
                </div>
                <div className='form_group'>
                    <label>Customer select</label>
                    <input type="radio" {...{...register('select'), value:"IT"}}/>
                    <span>IT</span> <br />
                    <input type="radio" {...{...register('select'), value:"Designer"}}/>
                    <span>Designer</span> <br />
                    <input type="radio" {...{...register('select'), value:"Devops"}}/>
                    <span>Devops</span> <br />
                    <input type="radio" {...{...register('select'), value:"Other"}}/>
                    <span>Other</span>
                    <p>{error.select}</p>
                </div>
                <div className='form_group'>
                    <label>Age</label>
                    <input type="number" {...register('age')}/>
                    <p>{error.age}</p>
                </div>
                <div className='form_group'>
                    <input type="checkbox" {...register('check')}/>
                    <span>Đồng ý với điều khoản</span>
                    <p>{error.check}</p>
                </div>
                 <Buttons handleClick={handleSubmit}>Submit</Buttons>
            </form>
        </div>
    )
}

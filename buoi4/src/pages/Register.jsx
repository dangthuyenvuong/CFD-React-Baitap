import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export function Register() {
    const Navigate = useNavigate();
    let [form,setForm] = useState({
        email:'',
        username:'',
        password:'',
        confirm:'',
        select:'',
        age: '',
        check: ''
    });
    let [error,setError] = useState({});
    function _onChange(name) {
        return (e) => {
            setForm({
                ...form,
                [name]: (name=='check')? e.currentTarget.checked:e.currentTarget.value
            })
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        let ob = {}
        if(!form.email.trim()) ob.email = 'Không được để email trống';
        else if(!emailRegexp.test(form.email)) ob.email = 'Email sai định dạng';

        if (!form.username.trim()) ob.username = 'Không được để username trống'
        else if (form.username.length < 2) ob.username = 'username phải lớn hơn 2 ký tự'
        
        if (!form.password.trim()) ob.password = 'Không được để password trống'
        else if (form.password.length < 6 || form.password.length > 32) ob.password = 'password phải tu 6 đến 32 ký tự'

        if (!form.confirm.trim()) ob.confirm = 'Nhập lại mật khẩu';
        else if (!(form.confirm == form.password)) ob.confirm = 'Không giông password'

        if(!form.select.trim()) ob.select = 'Vui lòng chọn';

        if(!form.age.trim()) ob.age = 'Vui lòng nhập tuổi';
        else if(form.age < 18) ob.age = 'Tuổi dưới 18';

        if(!form.check) ob.check = 'Vui lòng đồng ý với điều khoản';
        setError(ob);
        if (Object.keys(ob).length == 0) {
            let {email , username , password , age} = form;
            let data = {email , username , password , age};
            window.localStorage.setItem(`user${localStorage.length}` , JSON.stringify(data));
            Navigate('/auth')
        } 
    }

    return (
        <div>
            <form className='form'>
                <div className='form_group'>
                    <label>Email</label>
                    <input type="type" name="email" value={form.email} onChange={_onChange('email')} />
                    <p>{error.email}</p>
                </div>
                <div className='form_group'>
                    <label>User name</label>
                    <input type="text" name="username" onChange={_onChange('username')}/>
                    <p>{error.username}</p>
                </div>
                <div className='form_group'>
                    <label>Password</label>
                    <input type="password" name="password" onChange={_onChange('password')}/>
                    <p>{error.password}</p>
                </div>
                <div className='form_group'>
                    <label>Confirm password</label>
                    <input type="password" name="confirm" onChange={_onChange('confirm')}/>
                    <p>{error.confirm}</p>
                </div>
                <div className='form_group'>
                    <label>Customer select</label>
                    <input type="radio" name="select" value="IT" onChange={_onChange('select')}/>
                    <span>IT</span> <br />
                    <input type="radio" name="select" value="Designer" onChange={_onChange('select')}/>
                    <span>Designer</span> <br />
                    <input type="radio" name="select" value="Devops" onChange={_onChange('select')}/>
                    <span>Devops</span> <br />
                    <input type="radio" name="select" value="Other" onChange={_onChange('select')}/>
                    <span>Other</span>
                    <p>{error.select}</p>
                </div>
                <div className='form_group'>
                    <label>Age</label>
                    <input type="text" name="age" onChange={_onChange('age')}/>
                    <p>{error.age}</p>
                </div>
                <div className='form_group'>
                    <input type="checkbox" name="check" onChange={_onChange('check')}/>
                    <span>Đồng ý với điều khoản</span>
                    <p>{error.check}</p>
                </div>
                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

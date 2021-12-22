// import Button from '../Button'
import React, { useState } from 'react'
import './style.scss'

const ValidateForm = () => {

    const [form, setForm] = useState({
        usename: '',
        password: '',
        cfpassword: '',
        name: '',
        job: '',
        age: '',
        check: ''
    })

    const handleChange = (name) => (e) => {
        setForm({ ...form, [name]: e.target.value })
    }

    const [err, setErr] = useState();

    const handleSubmit = () => {
        let obj = {};
        if (!form.usename) {
            obj.usename = 'Please enter usename'
        }
        if (!form.password) {
            obj.password = 'Please enter password'
        } else if (form.password.length < 6 || form.password.length > 32) {
            obj.password = 'Password must contain at least 6 characters and less than 32 characters'
        }
        if (!form.cfpassword) {
            obj.cfpassword = 'Please enter confirm password'
        } else if (form.password !== form.cfpassword) {
            obj.cfpassword = 'Confirm password wrong, please try again'
        }
        if (!form.name) {
            obj.name = 'Please enter your name'
        } else if (form.name.length < 2) {
            obj.name = 'Name must contain at least 2 characters'
        }

        if (!form.age) {
            obj.age = 'Please enter your age'
        } else if (form.age < 18) {
            obj.age = 'User must be 18 years old'
        }

        if (!form.check) {
            obj.check = 'Please agree!'
        }
        setErr(obj)
        console.log(form)
    }

    const [isChoose, setIsChoose] = useState()

    const handleSelect = (e) => {
        let selectobj = {}
        if (e.target.value === 'other') {
            selectobj.index = 1
        }
        setIsChoose(selectobj.index)
        form.job = `${e.target.value}`
    }

    return (
        <>
            <div className="checkout-page">
                <div className="regis-form">
                    <h2>Register</h2>
                    <form>
                        <div className="textField">
                            <label htmlFor="">Username</label>
                            <input type="text" value={form.usename} onChange={handleChange('usename')} />
                            {
                                err && <p>{err.usename}</p>
                            }
                        </div>

                        <div className="textField">
                            <label htmlFor="">Password</label>
                            <input type="password" value={form.password} onChange={handleChange('password')} />
                            {
                                err && <p>{err.password}</p>
                            }
                        </div>

                        <div className="textField">
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" value={form.cfpassword} onChange={handleChange('cfpassword')} />
                            {
                                err && <p>{err.cfpassword}</p>
                            }
                        </div>
                        <div className="textField">
                            <label htmlFor="">Name</label>
                            <input type="text" value={form.name} onChange={handleChange('name')} />
                            {
                                err && <p>{err.name}</p>
                            }
                        </div>
                        <div className="selectArea">
                            <label htmlFor="selectList">Customer is</label>
                            <select onChange={handleSelect} name="selectList" >
                                <option value="it"> IT </option>
                                <option value="designer"> Designer </option>
                                <option value="dev"> Developer </option>
                                <option value="other"> Other </option>
                            </select>
                            {
                                isChoose && <input value={form.job} type="text" onChange={handleChange('job')} />
                            }
                        </div>

                        <div className="textField">
                            <label htmlFor="">Age</label>
                            <input type="number" value={form.age} onChange={handleChange('age')} />
                            {
                                err && <p>{err.age}</p>
                            }
                        </div>

                        {/* <div className="checkboxArea">
                            <input type="checkbox" value={form.check} onChange={handleSelect} name="" id="" />
                            <label htmlFor="">Agree to the terms of service</label>
                            {
                                err && <p>{err.check}</p>
                            }
                        </div> */}

                    </form>

                    <button type="normal" onClick={handleSubmit} size='large'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default ValidateForm

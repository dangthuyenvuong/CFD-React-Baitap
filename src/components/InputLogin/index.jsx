import React, { useState } from 'react'
import TextField from '../TextField'

export default function InputLogin({ name, type, submitLogin }) {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,32}$/
    const [form, setForm] = useState({
        username: "",
        password: ""
    })
    const [error, setError] = useState({

    })
    function submit(ev) {
        ev.preventDefault();
        let errorObj = {}
        if (!form.username) {
            errorObj.username = "dien username"
        } else if (!emailRegex.test(form.username)) {
            errorObj.username = "username khonh phai email"
        }
        if (!form.password) {
            errorObj.username = "dien password"
        } else if (!passwordRegex.test(form.password)) {
            errorObj.password = "password khonh dung"
        }
        setError(errorObj);
        if (Object.keys(errorObj).length === 0) {
            alert("dang nhap thanh cong")
        }
    }
    function change(name) {
        return (ev) => {
            setForm({
                ...form, [name]: ev.target.value
            })
        }
    }

    return (
        <  >
            <form onSubmit={submit} className="">
                <h1 className="h1">Login</h1>
                <div className="register__form">
                    <TextField
                        label="username"
                        onChange={change("username")}
                        type="text"
                        value={form.username}
                        errorText={error.username}
                    />
                    <TextField
                        label="password"
                        onChange={change("password")}
                        type="password"
                        value={form.password}
                        errorText={error.password}
                    />
                    <button type="submit" onClick={submitLogin} className="button" >Submit</button>
                </div>
            </form>
        </>
    )
}

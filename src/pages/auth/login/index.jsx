import Button from 'components/Button'
import TextField from 'components/TextField'
import { useAuth } from 'context/AuthContext'
import React, { useState } from 'react'
import { delay } from 'utils/delay'
import './style.scss'

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const Checkout = () => {

    const { submitLogin } = useAuth()

    const [isFetching, setIsFetching] = useState(false)

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState({})

    const submit = async (ev) => {
        ev.preventDefault()
        let errorObj = {}
        if (!form.username.trim()) {
            errorObj.username = 'Username khong duoc de trong'
        } else if (!emailRegexp.test(form.username)) {
            errorObj.username = 'Username phai la Email'
        }

        if (!form.password) {
            errorObj.password = 'Password khong duoc de trong'
        } else if (form.password.length < 6 || form.password.length > 32) {
            errorObj.password = 'Password phai tu 6-32 ky tu'
        }

        setError(errorObj)

        if (Object.keys(errorObj).length === 0) {
            setIsFetching(true)
            await delay(3000)
            submitLogin(form)
            setIsFetching(false)
        }
    }

    const _onChange = (name) => (ev) => {
        setForm({
            ...form,
            [name]: ev.currentTarget.value
        })
    }

    return (
        <div className="Login-page">
            <div className="container">
                <div className="form-wrap">
                    <h1>Login</h1>
                    <form onSubmit={submit} >
                        <TextField
                            label="Username"
                            value={form.username}
                            onChange={_onChange('username')}
                            placholder="Example@gmail.com"
                            errorText={error.username}
                        />
                        <TextField
                            label="Password"
                            value={form.passowrd}
                            onChange={_onChange('password')}
                            placholder="Password"
                            type="password"
                            errorText={error.password}
                        />
                        {/* <label>
                            <div className="label">Username</div>
                            <input type="text" value={form.username} onChange={_onChange('username')} />
                            <p className="error-text">{error.username}</p>
                        </label> */}
                        {/* <label>
                            <div className="label">Password</div>
                            <input type="password" value={form.password} onChange={_onChange('password')} />
                            <p className="error-text">{error.password}</p>
                        </label> */}
                        <Button loading={isFetching}>Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout
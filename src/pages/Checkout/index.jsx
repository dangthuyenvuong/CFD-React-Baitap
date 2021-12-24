import Button from 'components/Button'
import TextField from 'components/TextField'
import React, { useState } from 'react'
import { useForm } from 'hooks/useForm'
// import { useForm } from 'react-hook-form'
import { delay } from 'utils/delay'
import './style.scss'


export const Checkout = () => {

    // const { register, handleSubmit, formState: { errors } } = useForm()

    const [isFetching, setIsFetching] = useState(false)

    // const submit = async (form) => {

    //     setIsFetching(true)
    //     // await delay(3000)
    //     console.log(form)
    //     setIsFetching(false)
    // }
    // console.log(errors)


    const { register, handleSubmit, error, setForm, form } = useForm()
    const submit = async (form) => {
        setIsFetching(true)
        await delay(3000)
        console.log(form)
        setIsFetching(false)
    }

    return (
        <div className="checkout-page">
            <div className="container">
                <div className="form-wrap">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit(submit)} >
                        <TextField
                            label="Username"
                            {...register('username', { required: true, pattern: 'email' }, { required: 'Username không được để trống', pattern: 'Username phải là Email' })}
                            // value={form.username}
                            placholder="Example@gmail.com"
                            errorText={error.username}
                        />
                        <TextField
                            label="Password"
                            // value={form.passowrd}
                            // onChange={_onChange('password')}
                            {...register('password', { required: true })}
                            placholder="Password"
                            type="password"
                            errorText={error.password}
                        />

                        <input type="checkbox" onChange={ev => setForm({...form, checkbox: ev.currentTarget.checked})}/>
                        {
                            form.checkbox && <>
                                 <TextField
                                    label="Email"
                                    // value={form.passowrd}
                                    // onChange={_onChange('password')}
                                    {...register('email', { required: true, pattern: 'email' })}
                                    placholder="Email"
                                    errorText={error.email}
                                />
                            </>
                        }
                        {/* <label>
                            <div className="label">Email</div>
                            <input type="text" defaultValue={form.email} onChange={onChange('email')} />
                            <p className="error-text">{error.email}</p>
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
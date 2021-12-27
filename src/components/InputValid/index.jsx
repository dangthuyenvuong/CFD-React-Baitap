import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import TextField from '../TextField';
import "./style.scss"
export default function InputValid({ regis, name, type, submitRegis }) {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,32}$/
    const nameRegex = /(.*[a-z]){2}/i
    const ageRegex = /^[0-9]+$/
    const [form, setForm] = useState({
        username: "",
        password: "",
        confirm: "",
        name: "",
        age: "",
    })
    const [error, setError] = useState({})
    // function submit(ev) {
    //     ev.preventDefault();
    //     let errorObject = {}
    //     if (!form.username.trim()) {
    //         errorObject.username = "* Vui lòng điền username"
    //     } else if (!emailRegex.test(form.username)) {
    //         errorObject.username = "* Username phải là email"
    //     }
    //     if (!form.password.trim()) {
    //         errorObject.password = "* Vui lòng điền password"
    //     } else if (!passwordRegex.test(form.password)
    //     ) {
    //         errorObject.password = "* Password phải có ..."

    //     }
    //     if (form.confirm !== form.password) {
    //         errorObject.confirm = "* Nhập lại ko đúng"
    //     } if (!nameRegex.test(form.name)) {
    //         errorObject.name = "* Tên phải có 2 ký tự trở len"
    //     }
    //     if (form.age < 18) {
    //         errorObject.age = "* Bạn phải đủ 18 tuổi"
    //     }
    //     setError(errorObject); // cập nhật lại biến error
    //     if (Object.keys(errorObject).length === 0) {
    //         alert("thanh cong")

    //     }
    // }

    function submit(ev) {
        ev.preventDefault();
        let errorObject = {};
        if (!form.username.trim()) {
            errorObject.username = "*dien username"
        } else if (!emailRegex.test(form.username)) {
            errorObject.username = "*dien username la email"
        } if (!form.password) {
            errorObject.password = "*điền password"
        }
        else if (!passwordRegex.test(form.password)) {
            errorObject.password = "*password điền sai định dạng"
        } if (form.confirm !== form.password) {
            errorObject.confirm = "* nhap lai sai pass"
        } if (!nameRegex.test(form.name)) {
            errorObject.name = "* Tên phải có 2 ký tự trở len"
        } if (!ageRegex.test(form.age)) {
            errorObject.age = "* Bạn phải nhap tuổi"
        } else if (form.age < 18) {
            errorObject.age = "* Bạn phải du 18 tuổi"
        }
        console.log(form);
        setError(errorObject);
        if (Object.keys(errorObject).length === 0) {
            alert(" dang ky thanh cong");
            submitRegis()

        }

    }







    console.log(regis);
    function change(name) {
        return (ev) => {
            setForm({
                ...form, [name]: ev.target.value
            })
        }

    }

    return (
        <>


            <form onSubmit={submit}>
                <h1 className="h1">Register</h1>
                <div className="register__form">

                    <TextField label="Username"
                        type="text"
                        value={form.username}
                        errorText={error.username}
                        onChange={change("username")}
                        placeholder="Example@gmail.com"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={form.password}
                        errorText={error.password}
                        onChange={change("password")}
                    />
                    <TextField
                        label="Confirm"
                        type="password"
                        value={form.confirm}
                        errorText={error.confirm}
                        onChange={change("confirm")}
                    />
                    <TextField
                        label="Name"
                        type="text"
                        value={form.name}
                        errorText={error.name}
                        onChange={change("name")}
                    />
                    <TextField
                        label="Age"
                        type="text"
                        value={form.age}
                        errorText={error.age}
                        onChange={change("age")}
                    />
                    <button onClick={submitRegis} type="submit" className="button" >Submit</button>
                </div>

            </form>

        </>
    )
}


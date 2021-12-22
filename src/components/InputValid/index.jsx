import React, { useState } from 'react'
import TextField from '../TextField';
import "./style.scss"
export function ValidInput({ name, type }) {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,32}$/
    const nameRegex = /(.*[a-z]){2}/i
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
        } if (form.age < 18) {
            errorObject.age = "* Bạn phải đủ 18 tuổi"
        }
        console.log(form);
        setError(errorObject);
        if (Object.keys(errorObject).length === 0) {
            alert("thanh cong")
        }

    }







    function change(name) {
        return function (ev) {
            setForm({ ...form, [name]: ev.target.value });

        }
    }


    return (
        <>
            {/* <form onSubmit={submit}>

                <h1 className="">register</h1>
                <TextField
                    label="Username"
                    value={form.username}
                    onChange={change("username")}
                    placeholder="Example@gmail.com"
                    errorText={error.username}


                />
                <TextField
                    label="Password"
                    value={form.password}
                    onChange={change("password")}
                    placeholder="Password"
                    type="password"
                    errorText={error.password}

                />
                <TextField
                    label="Confirm Password"
                    value={form.confirm}
                    onChange={change("confirm")}
                    placeholder="Confirm Password"
                    type="password"
                    errorText={error.confirm}

                />
                <TextField
                    label="Name"
                    value={form.name}
                    onChange={change("name")}
                    placeholder="Name"
                    type="text"
                    errorText={error.name}

                />
                <TextField
                    label="Age"
                    value={form.age}
                    onChange={change("age")}
                    placeholder="Age"
                    type="text"
                    errorText={error.age}

                />




                <button className="button" >Submit</button>

            </form> */}

            <form onSubmit={submit}>
                <h1 className="">Register</h1>
                <TextField label="username"
                    type="text"
                    value={form.username}
                    errorText={error.username}
                    onChange={change("username")}
                    placeholder="Example@gmail.com"
                />
                <TextField
                    label="password"
                    type="password"
                    value={form.password}
                    errorText={error.password}
                    onChange={change("password")}
                />
                <TextField
                    label="confirm"
                    type="password"
                    value={form.confirm}
                    errorText={error.confirm}
                    onChange={change("confirm")}
                />
                <TextField
                    label="name"
                    type="text"
                    value={form.name}
                    errorText={error.name}
                    onChange={change("name")}
                />
                <TextField
                    label="age"
                    type="text"
                    value={form.age}
                    errorText={error.age}
                    onChange={change("age")}
                />
                <button className="button" >Submit</button>

            </form>

        </>
    )
}


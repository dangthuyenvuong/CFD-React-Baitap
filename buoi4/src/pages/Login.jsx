import React, { useState } from 'react'

export function Login({handleLogin}) {
    let [user,setUser] = useState({});
    let style= {
        fontWeight: 700,
        fontSize: 20
    }
    function checkLogin(e) {
        e.preventDefault();
        let succes = false
        let keys = Object.keys(localStorage) , i = keys.length;
        let data = [];
        while(i--) data.push(JSON.parse(localStorage.getItem(keys[i])));

        for (let accout of data)
            if (accout.email == user.email && accout.password==user.password) {
                handleLogin(accout);
                succes = true;
            };
        if(!succes) alert('Tài khoản không tồn tại');


    }
    return (
        <div>
            <form action="" style={style}>
                <label>User name</label> <br />
                <input type="text" onChange={(e) => setUser({...user , email : e.currentTarget.value})}/> <br />
                <label>Password</label> <br />
                <input type="password" onChange={(e) => setUser({...user , password : e.currentTarget.value})} /> <br />
            </form>
            <button onClick={checkLogin}>Log in</button>
        </div>
    )
}

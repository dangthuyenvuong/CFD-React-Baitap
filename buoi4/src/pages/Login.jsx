import React from 'react'

export function Login({LOGIN}) {
    let style= {
        fontWeight: 700,
        fontSize: 20
    }
    return (
        <div>
            {/* <form action="" style={style}>
                <label htmlFor="">User name</label> <br />
                <input type="text" /> <br />
                <label htmlFor="">Password</label> <br />
                <input type="password" /> <br />
                <input type="submit" />
            </form> */}
            <button onClick={LOGIN}>Log in</button>
        </div>
    )
}

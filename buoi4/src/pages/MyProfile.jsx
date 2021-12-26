import React from 'react'

export function MyProfile({data}) {
    return (
        <pre>Username: {data.username} <br />
        Email: {data.email}<br />
        Password: {data.password}<br />
        Age: {data.age}<br />
        </pre>
    )
}

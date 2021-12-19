import React from 'react';
import "./style.scss";

export default function Button({color = "simple", size = "small", type = "default", children}) {
    return (
        <button className={`btn btn-${size} color-${color} icon-${type}`}>
            {children}
        </button>
    )
}

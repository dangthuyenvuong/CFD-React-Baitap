import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
export function Breadcrumb({children}) {
    const len = React.Children.count(children)
    return (
        <div className="breadcrumb">
            <ul>
                {
                    React.Children.map(children, (child, index) => <li>{child}{index < len - 1 ? '>' : ''}</li>)
                }
            </ul>
        </div>
    )
}
export const BreadcrumbsItem = ({to,children }) => {
    return (
        <Link to={to} className="item">{children}</Link>
    )
}

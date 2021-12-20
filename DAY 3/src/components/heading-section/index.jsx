import React from 'react'
import Button from '../button'
import { ArrowDown } from '../icon'
import './style.scss'

export default function HeadingSection({heading, children}) {
    return (
        <div className="headingSection">
            <div className="container">
                <div className="headingSection__wrap">
                    <h4 className="heading --h4">{heading}</h4>
                    <Button type="icon-right">
                        {children}
                        <ArrowDown size="16"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

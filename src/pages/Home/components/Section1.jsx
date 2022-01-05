import React, { useEffect } from 'react'
import { useRef } from 'react/cjs/react.development'

export const Section1 = () => {

    const divRef = useRef()

    useEffect(() => {
        function scroll(){
            // console.log('scroll', window.scrollY)
        }
        window.addEventListener('scroll',scroll) 

        return () => {
            window.removeEventListener('scroll', scroll)
        }
    }, [])

    return (
        <div ref={divRef}>
            Section 1
        </div>
    )
}

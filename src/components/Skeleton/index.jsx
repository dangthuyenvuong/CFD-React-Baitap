import { Skeleton as SkeletonM } from '@mui/material'
import React from 'react'

export const Skeleton = (props) => {
    return (
        <SkeletonM {...props} style={{transform: 'scale(1)'}}/>
    )
}

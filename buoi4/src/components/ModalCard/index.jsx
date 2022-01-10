import React from 'react'
import {Drawer} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

export default function ModalCard() {
    const dispatch = useDispatch()
    const {isOpenCard} = useSelector(state => state.page)
    return (
        <Drawer
        open={isOpenCard}
        onClose={() => dispatch({ type: 'CLOSE_CARD' })}
        className="ModalCart"
    >
        Card
    </Drawer>
    )
}

import React from 'react'
import { Compare, Heart, Plus, Star } from '../../../../components/icons'
import InfoTable from '../../../../components/InfoTable';
import {Buttons, Inputs} from '../../../../components'

import './style.scss';
export default function Detail_box() {
    return (
        <div className='detailBox'>
            <div className='detailBox_title'>
                <h2>Carrots from Tomissy Farm</h2>
                <div className='review'>
                    <div className='icons'>
                        <Star background='#FDBC15'/>
                        <Star background='#FDBC15'/>
                        <Star background='#FDBC15'/>
                        <Star background='#FDBC15'/>
                        <Star />
                    </div>
                    <span>(1 customer review)</span>
                </div>
                
            </div>
            <div className='detailBox_info'>
                <p>Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.</p>
                <InfoTable />
            </div>
            <div className='detailBox_controls'>
                <div className='addToCard'>
                    <div className='addToCard_cost'>
                        <p>36.23 USD</p>
                        <span>48.56 USD</span>
                    </div>
                    <Inputs />
                    <Buttons bg='main' radius color='bright' border='bold'>
                        <Plus color='#ffffff'/>
                        <span>Add to card</span>
                    </Buttons>
                </div>
                <ul className='addToCustom'>
                    <li>
                        <Heart />
                        <span>Add to my wish list</span>
                    </li>
                    <li>
                        <Compare />
                        <span>Compare</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

import React from 'react'
import Button from '../../components/button'
import {ArrowDown} from './components/img';

export default function ButtonShow() {
    return (
        <div>
    <Button>button</Button>
      <Button size='medium' color='colored' round>button</Button>
      <Button size='large' color='stoke'>button</Button>
      <Button type='icon-left' >button</Button>
      <Button type='icon-left' size='medium' color='colored' round icon={<ArrowDown size='16' />}>button</Button>
      <Button  type='icon-right' size='large' color='stoke'>button</Button>
        </div>
    )
}

import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import {useForm} from '../../hooks/useForm'

export default function Checkout() {
    const BillingInfo = forwardRef((props,ref) => {
        let {form,validate,handleSubmit,register} = useForm({
            key1: ''
        });
        useImperativeHandle(
            ref,
            () => ({
                form,
                validate,
                handleSubmit  
            }),
            [form]
        )
        return (
            <>
                <h1>Billing Info</h1>
                <input type='text' {...register('key1')}/>
            </>
        )

    })
    const BillingMethod = forwardRef((props,ref) => {
        let {form,validate,handleSubmit,register} = useForm({
            key2: ''
        });
        useImperativeHandle(
            ref,
            () => ({
                form,
                validate,
                handleSubmit  
            }),
            [form]
        )
        return (
            <>
                <h1>Billing Method</h1>
                <input type='text' {...register('key2')}/>
            </>
        )

    })
    const PayMethod = forwardRef((props,ref) => {
        let {form,validate,handleSubmit,register} = useForm({
            key3: ''
        });
        useImperativeHandle(
            ref,
            () => ({
                form,
                validate,
                handleSubmit  
            }),
            [form]
        )
        return (
            <>
                <h1>Pay Method</h1>
                <input type='text' {...register('key3')}/>
            </>
        )

    })
    const Addition = forwardRef((props,ref) => {
        let {form,validate,handleSubmit,register} = useForm({
            key4: ''
        });
        useImperativeHandle(
            ref,
            () => ({
                form,
                validate,
                handleSubmit  
            }),
            [form]
        )
        return (
            <>
                <h1>Addition</h1>
                <input type='text' {...register('key4')}/>
            </>
        )

    })
    const Confirm = forwardRef((props,ref) => {
        let {form,validate,handleSubmit,register} = useForm({
            key5: ''
        });
        useImperativeHandle(
            ref,
            () => ({
                form,
                validate,
                handleSubmit  
            }),
            [form]
        )
        return (
            <>
                <h1>Confirmation</h1>
                <input type='text' {...register('key5')}/>
            </>
        )

    })

    let billInfoRef = useRef();
    let billMethodRef = useRef();
    let payMethodRef = useRef();
    let additionRef = useRef();
    let confirmRef = useRef();

    function submit(e) {
        e.preventDefault();
        let error = {
            ...billInfoRef.current?.validate(),
            ...billMethodRef.current?.validate(),
            ...payMethodRef.current?.validate(),
            ...additionRef.current?.validate(),
            ...confirmRef.current?.validate(),
        }
        console.log(error)
        if (Object.keys(error).length == 0) {
            let formOb = {
                ...billInfoRef.current?.form,
                ...billMethodRef.current?.form,
                ...payMethodRef.current?.form,
                ...additionRef.current?.form,
                ...confirmRef.current?.form,
            }
            console.log(formOb)
        }
    }
    return (
        <>
          <BillingInfo ref={billInfoRef} />
          <BillingMethod ref={billMethodRef} />
          <PayMethod ref={payMethodRef} />
          <Addition ref={additionRef} />
          <Confirm ref={confirmRef} />
          <br />
          <button onClick={submit}>Submit</button>  
        </>
    )
}

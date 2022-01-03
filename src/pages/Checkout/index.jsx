import TextField from "components/TextField";
import { useForm } from "hooks/useForm";
import { forwardRef, useImperativeHandle } from "react";
import { useRef } from "react/cjs/react.development";

const BillingInfo = forwardRef((props, ref) => {
    const { register, form, validate } = useForm()

    useImperativeHandle(ref, () => {
        return {
            validate,
            form
        }
    }, [validate, form])

    return (
        <div>
            <h2 className="title">Billing Info</h2>
            <TextField {...register('fullName', { required: true })} />
        </div>
    )
})
const BillingMethod = forwardRef((props, ref) => {
    const { register, validate, form } = useForm()
    useImperativeHandle(ref, () => {
        return {
            validate,
            form
        }
    }, [validate, form])

    return (
        <div>
            <h2 className="title">Billing Method</h2>
            <TextField {...register('billingInfo', { required: true })} />
        </div>
    )
})
const PaymentMethod = forwardRef((props, ref) => {
    const { register, validate, form } = useForm()
    useImperativeHandle(ref, () => {
        return {
            validate,
            form
        }
    }, [validate, form])

    return (
        <div>
            <h2 className="title">Payment Method</h2>
            <TextField {...register('paymentMethod', { required: true })} />

        </div>
    )
})
const AddInfo = forwardRef((props, ref) => {
    const { register, validate, form } = useForm()
    useImperativeHandle(ref, () => {
        return {
            validate, form
        }
    }, [validate, form])

    return (
        <div>
            <h2 className="title">Add Info</h2>
            <TextField {...register('note', { required: true })} />
        </div>
    )
})


function App() {

    const billingInfoRef = useRef()
    const billingMethodRef = useRef()
    const paymentMethodRef = useRef()
    const addInfoRef = useRef()

    const submit = () => {
        const errorObject = {
            ...billingInfoRef.current?.validate(),
            ...billingMethodRef.current?.validate(),
            ...paymentMethodRef.current?.validate(),
            ...addInfoRef.current?.validate(),
        }

        console.log(errorObject)

        if (Object.keys(errorObject).length === 0) {
            const formData = {
                ...billingInfoRef.current?.form,
                ...billingMethodRef.current?.form,
                ...paymentMethodRef.current?.form,
                ...addInfoRef.current?.form,
            }
            console.log(formData)
        }
    }

    return (
        <div className="App">
            <BillingInfo ref={billingInfoRef} />
            <BillingMethod ref={billingMethodRef} />
            <PaymentMethod ref={paymentMethodRef} />
            <AddInfo ref={addInfoRef} />
            <button onClick={submit}>Submit</button>
        </div>
    );
}

export default App
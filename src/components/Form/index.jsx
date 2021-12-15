import { forwardRef, useImperativeHandle, useRef } from "react"

const Form = forwardRef(({ children, onSubmit }, ref) => {
    const formRef = useRef()
    useImperativeHandle(ref, () => {
        return {
            submit: () => {
                formRef.current.dispatchEvent(new Event('submit'))
            },
            reset: () => {
                formRef.current.dispatchEvent(new Event('reset'))
            }
        }
    }, [])

    return (
        <form onSubmit={(ev) => { ev.preventDefault(); onSubmit?.() }}>
            {children}
        </form>
    )
})

export default Form
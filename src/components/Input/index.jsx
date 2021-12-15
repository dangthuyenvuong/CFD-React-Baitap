import { forwardRef } from "react"

const Input = forwardRef(({ value: initValue, ...rest }, ref) => {
    const [value, setValue] = useState(initValue)

    return <input {...rest} onChange={(ev) => setValue(ev.currentTarget.value)} value={value} ref={ref} />
})

export default Input

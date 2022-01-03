import { useQuery } from "hooks/useQuery"
import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import productService from "services/productService"

const Product = () => {
    // const [isFetching, setIsFetching] = useState(true)
    // const [products, setProducts] = useState()

    // useEffect( () => {
    //     (async () => {
    //         setIsFetching(true)
    //         const res = await productService.list()
    //         setProducts(res.data)
    //         setIsFetching(false)
    //     })()
    // }, [])

    const {
        data: products,
        isFetching: productIsFetching
    } = useQuery(productService.list, [])

    if (productIsFetching) return '...loading'

    console.log(products)

    return (
        <div>Product</div>
    )
}

export default Product
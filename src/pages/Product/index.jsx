import Paginate from "components/Paginate"
import { useQuery } from "hooks/useQuery"
import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import productService from "services/productService"
import { urlQueryToObject } from "utils/urlQueryToObject"

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

    const query = urlQueryToObject({page: 1})

    const {
        data: products,
        isFetching: productIsFetching
    } = useQuery(() => productService.list(window.location.search), [window.location.search])

    if (productIsFetching) return '...loading'

    console.log(products)

    return (
        <>
            <div>Product</div>
            <Paginate totalPage={products?.paginate?.totalPage}/>
        </>
    )
}

export default Product
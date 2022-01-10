import Paginate from "components/Paginate"
import { useQuery } from "hooks/useQuery"
import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import productService from "services/productService"
import { urlQueryToObject } from "utils/urlQueryToObject"
import { ProductCard } from 'components/ProductCard'
import './style.scss'

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

    const query = urlQueryToObject({ page: 1 })

    const {
        data: products,
        isFetching: productIsFetching
    } = useQuery(() => productService.list(window.location.search), [window.location.search])

    return (
        <>
            <div>Product</div>
            <Paginate totalPage={products?.paginate?.totalPage} />
            <div className="product-list">
                {
                    productIsFetching ? [...Array(9)].map((e, i) => <ProductCard key={i} loading={true}/>) :
                    products.map(e => <ProductCard key={e.id} {...e}/>)
                }
            </div>
        </>
    )
}

export default Product